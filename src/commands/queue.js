import { QUEUES_LIST } from '../config/queues.js'
import { playCards } from "../config/messages.js"

export default async function queue(message) { 
  const serverQueue = QUEUES_LIST.get(message.guild.id)
  const queueList = serverQueue.songs.map((song, i) => `[${++i}]  - ${song.title}`)
  let queueMsg
  if (queueList.length) {
    queueMsg = queueList.join('\n')
  } else {
    queueMsg = '- Sem músicas interdimensionais na fila'
  }
  return serverQueue.textChannel.send({embeds: [playCards.queue(queueMsg)]})
}