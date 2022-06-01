import { QUEUES_LIST } from '../config/queues.js'
import { playCards, errorCards } from "../config/messages.js"

export default async function queue(message) { 
  const voiceChannel = message.member.voice.channel
  if (!voiceChannel) {
    return message.channel.send({ embeds: [errorCards.noChannel()] })
  }
  const serverQueue = QUEUES_LIST.get(message.guild.id)
  let queueList
  if (!serverQueue || !serverQueue.songs) {
    queueList = []
  } else {
    queueList = serverQueue.songs.map((song, i) => `[${++i}]  - ${song.title}`)
  }
  let queueMsg
  if (queueList.length) {
    queueMsg = queueList.join('\n')
  } else {
    queueMsg = '- Sem músicas interdimensionais na fila'
  }
   return message.channel.send({embeds: [playCards.queue(queueMsg)]})
}