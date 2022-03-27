import { Client, Intents } from 'discord.js'
import COMMANDS from './config/commands.js'
import {errorCards} from './config/messages.js'
import { DISCORD_TOKEN, PREFIX } from './config/variables.js'


export const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, 'GUILD_VOICE_STATES'] })
client.login(DISCORD_TOKEN)

client.on("message", async message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return

    let messageCommand = message.content.split(' ')[0]

    if (Object.keys(COMMANDS).includes(messageCommand)) {
        return COMMANDS[messageCommand](message)
    } else {
        return message.channel.send({ embeds: [ errorCards.typo() ] })
    }
})

client.once("ready", () => console.log("WUBBA LUBBA DUB-DUB!!!"))

client.once("reconnecting", () => {
    console.log("🔁 reconnecting!")
})

client.once("disconnect", () => {
    console.log("👋 disconnected!")
})