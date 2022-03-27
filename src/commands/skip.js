import { player, streamSongFromQueue } from '../config/queues.js'

export default async function skip(message) { 
  player.stop()
  streamSongFromQueue(message.guild.id, message)
}