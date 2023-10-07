import { Message } from "discord.js";

export interface Command {
    name: string;
    execute: (message: KRAMessage) => void;
}

export class KRAMessage {
    msg: Message<boolean>;
    constructor(msg: Message<boolean>) {
        this.msg = msg;
    }
    send(p: string) {
        this.msg.reply("```" + p + "```");
    }
}
