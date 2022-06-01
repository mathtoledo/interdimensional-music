import { player, streamSongFromQueue } from '../config/queues.js'
import { errorCards } from "../config/messages.js"

export default async function skip(message) { 
  const voiceChannel = message.member.voice.channel
  if (!voiceChannel) {
    return message.channel.send({ embeds: [errorCards.noChannel()] })
  }
  player.stop()
  streamSongFromQueue(message.guild.id, message)
}