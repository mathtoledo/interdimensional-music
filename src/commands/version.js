import { VERSION } from "../config/variables.js"
import { playCards, errorCards } from "../config/messages.js"

export default async function help(message) {
   const voiceChannel = message.member.voice.channel
   if (!voiceChannel) {
      return message.channel.send({ embeds: [errorCards.noChannel()] })
   }
   return message.channel.send({ embeds: [ playCards.version(VERSION) ] })
}