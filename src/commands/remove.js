import { QUEUES_LIST } from '../config/queues.js'
import { playCards } from "../config/messages.js"

export default async function remove(message) { 
  const content = Number(message.content.split(' ').slice(1).join(' '))
  
  const serverQueue = QUEUES_LIST.get(message.guild.id)
  const songTitle = serverQueue.songs[content - 1]?.title
  serverQueue.songs.splice(content - 1, 1)
  return serverQueue.textChannel.send({embeds: [playCards.remove(songTitle)]})
}