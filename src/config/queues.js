import { playCards } from "./messages.js"
import { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } from "@discordjs/voice"
import play from 'play-dl'

export const QUEUES_LIST = new Map()
export const player = createAudioPlayer()
export let PLAYING = false
let timeoutID;

export function createQueue(serverId, textChannel, voiceChannel) {

    if (!QUEUES_LIST.get(serverId)) {
        const startQueue = {
            textChannel: textChannel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: false
        }
        QUEUES_LIST.set(serverId, startQueue)
        console.log('queue criada')
    }

}

export function addSongToQueue(serverId, song, author, textChannel) {
     const serverQueue = QUEUES_LIST.get(serverId)
    if (timeoutID) {
        clearTimeout(timeoutID)
        timeoutID = undefined
    }
    serverQueue.songs.push(song)
    return textChannel.send({ embeds: [playCards.success(song?.title, author, song?.duration, song?.thumbnail, song?.url)] })
}

export async function streamSongFromQueue(serverId, message) {
    const serverQueue = QUEUES_LIST.get(serverId)

    const connection = joinVoiceChannel({
        channelId: serverQueue.voiceChannel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator
    })
    
    serverQueue.connection = connection
   
    playNextSong(serverId)

    serverQueue.playing = true

    connection.subscribe(player)

    player.on(AudioPlayerStatus.Playing, () => {
        if (serverQueue.songs[0] && !PLAYING) {
            serverQueue.textChannel.send({embeds: [playCards.playing(serverQueue.songs[0]?.title || '---', serverQueue.songs[0]?.duration || '---', serverQueue.songs[0]?.url)] })
            serverQueue.songs.shift()
            PLAYING = true
        }
    })

    player.on(AudioPlayerStatus.Idle, async () => {
        PLAYING = false
        playNextSong(serverId)
    })

    player.on('error', error => {
        console.error(`Error: ${error} with resource`)
    })
    
}

async function playNextSong(serverId) {
    const serverQueue = QUEUES_LIST.get(serverId)
    if (!PLAYING && serverQueue.songs.length) {
        let stream = await play.stream(serverQueue.songs[0].url)
        let resource = createAudioResource(stream.stream, {
            inputType: stream.type
        })
        player.play(resource)
    } /* else {                  
        autoDisconnect(serverId) 
    } */
}

/* async function autoDisconnect(serverId) {
    const serverQueue = QUEUES_LIST.get(serverId)
    timeoutID = setTimeout(() => {
        serverQueue.songs = []
        serverQueue.connection.disconnect()
    }, 5 * 60 * 1000)
} */

export function stopPlaying() { PLAYING = false }
