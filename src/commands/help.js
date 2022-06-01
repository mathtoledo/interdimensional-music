import { playCards, errorCards } from "../config/messages.js"
import {COMMANDS_LIST} from "../config/variables.js"

export default async function help(message) {
   const voiceChannel = message.member.voice.channel
   if (!voiceChannel) {
      return message.channel.send({ embeds: [errorCards.noChannel()] })
   }
   return message.channel.send({ embeds: [ playCards.help(COMMANDS_LIST.join('\n\n')) ] })
}