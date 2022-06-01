import { PREFIX } from "./variables.js"

import play from '../commands/play.js'
import skip from '../commands/skip.js'
import queue from '../commands/queue.js'
import stop from '../commands/stop.js'
import remove from '../commands/remove.js'
import help from '../commands/help.js'

const COMMANDS = {
    [`${PREFIX}play`]: (message) => play(message),
    [`${PREFIX}skip`]: (message) => skip(message),
    [`${PREFIX}stop`]: (message) => stop(message),
    [`${PREFIX}queue`]: (message) => queue(message),
    [`${PREFIX}remove`]: (message) => remove(message),
    [`${PREFIX}help`]: (message) => help(message),
}

export default COMMANDS;