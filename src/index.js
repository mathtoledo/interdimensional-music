import { Client, GatewayIntentBits, Events } from 'discord.js'
import COMMANDS from './config/commands.js'
import {errorCards} from './config/messages.js'
import { DISCORD_TOKEN, PREFIX } from './config/variables.js'


export const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ] 
})

client.login(DISCORD_TOKEN)

client.on(Events.MessageCreate, async message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return

    let messageCommand = message.content.split(' ')[0]

    if (Object.keys(COMMANDS).includes(messageCommand)) {
        return COMMANDS[messageCommand](message)
    } else {
        return message.channel.send({ embeds: [ errorCards.typo() ] })
    }
})

client.once(Events.ClientReady, () => console.log("WUBBA LUBBA DUB-DUB!!!"))

client.once(Events.ShardReconnecting, () => {
    console.log("🔁 reconnecting!")
})

client.once(Events.ShardDisconnect, () => {
    console.log("👋 disconnected!")
})