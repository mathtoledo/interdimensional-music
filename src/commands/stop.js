import { QUEUES_LIST, stopPlaying } from '../config/queues.js'
import { playCards, errorCards } from "../config/messages.js"

export default async function stop(message) { 
  const voiceChannel = message.member.voice.channel
  if (!voiceChannel) {
    return message.channel.send({ embeds: [errorCards.noChannel()] })
  }
  const serverQueue = QUEUES_LIST.get(message.guild.id)
  serverQueue.songs = []
  stopPlaying()
  serverQueue.textChannel.send({embeds: [playCards.stop()]})
  return serverQueue.connection.disconnect()
}