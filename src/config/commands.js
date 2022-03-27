import { PREFIX } from "./variables.js";

import play from '../commands/play.js';
// import skip from '../commands/skip.js';

const COMMANDS = {
    [`${PREFIX}play`]: (message) => play(message),
    // [`${PREFIX}skip`]: (message) => skip(message),
    // [`${PREFIX}stop`]: (message) => stop(message),
    // [`${PREFIX}queue`]: (message) => queue(message),
    // [`${PREFIX}help`]: (message) => queue(message),
}

export default COMMANDS;