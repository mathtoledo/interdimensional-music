import dotenv from 'dotenv'
dotenv.config()

const DISCORD_TOKEN = process.env.TOKEN
const PREFIX = process.env.PREFIX
const COMMANDS_LIST = [
  `**${PREFIX}play**: ➕ Adiciona uma música à fila de músicas interdimensionais`,
  `**${PREFIX}skip**: 🦘 Pula a música interdimensional que está tocando`,
  `**${PREFIX}stop**: ✋ Para o bot`,
  `**${PREFIX}queue**: 📃 Exibe a lista de músicas interdimensionais na fila`,
  `**${PREFIX}remove**: ❌ Remove uma música interdimensional da fila. Exemplo:\n\`.remove 2\` (Onde 2 é o número da música na fila)`,
  `**${PREFIX}version**: 👨‍💻 Exibe a versão atual do bot`,
  `**${PREFIX}help**: WUBBA LUBBA DUB-DUB!!!`,
]
const VERSION = process.env.VERSION
export { DISCORD_TOKEN, PREFIX, COMMANDS_LIST, VERSION }