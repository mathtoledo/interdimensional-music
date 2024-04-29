import { EmbedBuilder } from "discord.js"

export const playCards = {
	success: (title, author, duration, thumbnail, url) => {
		return new EmbedBuilder()
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
		return new EmbedBuilder()
		.setColor('#f8de1e')
		.setTitle(title)
		.setURL(url)
		.setDescription('👽 Vai tocar agora')
		.addFields(
			{ name: '⌚ Duração da música', value: duration },
		)
	},
	queue: (queueMsg) => {
		return new EmbedBuilder()
		.setColor('#f8de1e')
		.setTitle('👽 Músicas interdimensionais na fila')
		.setDescription(queueMsg)
	},
	stop: () => {
		return new EmbedBuilder()
		.setColor('#f8de1e')
		.setTitle('👋👽')
	},
	remove: (songTitle) => {
		return new EmbedBuilder()
		.setColor('#f8de1e')
		.setTitle(`❌ ${songTitle} removida da lista`)
	},
	help: (commandsList) => {
		return new EmbedBuilder()
		.setColor('#f8de1e')
		.setTitle(`👨🦅 Estou com muita dor, por favor, me ajude`)
		.setDescription(commandsList)
	},
	version: (version) => {
		return new EmbedBuilder()
		.setColor('#f8de1e')
		.setTitle(`v${version}`)
	},
}

export const errorCards = {
	error : (errorMessage) => {
		return new EmbedBuilder()
		.setColor('#f8de1e')
		.setTitle(errorMessage)
	},

	typo : () => {
		return new EmbedBuilder()
		.setColor('#f8de1e')
		.setTitle('❌ Parece que alguém digitou o comando errado, digite `.help` para mais informações. ❌ ')
	},

	permission : () => {
		return new EmbedBuilder()
		.setColor('#f8de1e')
		.setTitle('❌ Parece que eu não tenho permissão para entrar no canal de voz. ❌ ')
	},

	noChannel : () => {
		return new EmbedBuilder()
		.setColor('#f8de1e')
		.setTitle('❌ Você precisa estar conectado em um canal de voz. ❌ ')
	},
}