import youtubeSearch from '../utils/youtubeSearch.js'
import { errorCards } from '../config/messages.js'
import { createQueue, streamSongFromQueue, addSongToQueue, PLAYING, QUEUES_LIST } from '../config/queues.js'

export default async function play(message) {
    const content = message.content.split(' ').slice(1).join(' ')
    const voiceChannel = message.member.voice.channel
    
    if (message.content.split(' ').length <= 1) {
        return message.channel.send({ embeds: [errorCards.typo()] })
    }
    
    if (!voiceChannel) {
        return message.channel.send({ embeds: [errorCards.noChannel()] })
    }
    
    const permissions = voiceChannel.permissionsFor(message.client.user)

    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send({ embeds: [errorCards.permission()] })
    }

    const searchResult = await youtubeSearch(content)
    const author = {
        name: message.author.username,
        icon: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
    }
 
    try{
        createQueue(message.guild.id, message.channel, message.member.voice.channel)
        addSongToQueue(message.guild.id, searchResult, author, message.channel)
        if (QUEUES_LIST.get(message.guild.id).songs.length === 1 && !PLAYING) {
            streamSongFromQueue(message.guild.id, message)
        }
       
    } catch(err) {
        console.log(err.message)
    }
}