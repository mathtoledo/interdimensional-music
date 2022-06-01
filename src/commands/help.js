import { playCards } from "../config/messages.js"
import {COMMANDS_LIST} from "../config/variables.js"

export default async function help(message) {

   return message.channel.send({ embeds: [ playCards.help(COMMANDS_LIST.join('\n\n')) ] })
}