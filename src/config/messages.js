import { MessageEmbed } from "discord.js"

export const playCards = {
	success: (title, author, duration, thumbnail, url) => {
		return new MessageEmbed()
		.setColor('#f8de1e')
		.setTitle(title)
		.setURL(url)
		.setDescription('➕ Adicionada a fila de músicas interdimensionais')
		.setAuthor({ name: author.name, iconURL: author.icon})
		.addFields(
			{ name: '⌚ Duração da música', value: duration },
		)
		.setImage(thumbnail)
		.setTimestamp()
	},
	playing: (title, duration, url) => {
		return new MessageEmbed()
		.setColor('#f8de1e')
		.setTitle(title)
		.setURL(url)
		.setDescription('👽 Vai tocar agora')
		.addFields(
			{ name: '⌚ Duração da música', value: duration },
		)
	},
	queue: (queueMsg) => {
		return new MessageEmbed()
		.setColor('#f8de1e')
		.setTitle('👽 Músicas interdimensionais na fila')
		.setDescription(queueMsg)
	}
	
}

export const errorCards = {
	typo : () => {
		return new MessageEmbed()
		.setColor('#f8de1e')
		.setTitle('❌ Parece que alguém digitou o comando errado, digite `.help` para mais informações. ❌ ')
	},

	permission : () => {
		return new MessageEmbed()
		.setColor('#f8de1e')
		.setTitle('❌ Parece que eu não tenho permissão para entrar no canal de voz. ❌ ')
	},

	noChannel : () => {
		return new MessageEmbed()
		.setColor('#f8de1e')
		.setTitle('❌ Você precisa estar conectado em um canal de voz. ❌ ')
	},
}