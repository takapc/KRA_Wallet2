import { Client, Message } from "discord.js";

export interface Command {
    name: string;
    execute: (message: KRAMessage) => void;
}

export class KRAMessage {
    msg: Message<boolean>;
    client: Client<boolean>;
    constructor(msg: Message<boolean>, client: Client<boolean>) {
        this.msg = msg;
        this.client = client;
    }
    send(p: string) {
        this.msg.reply("```" + p + "```");
    }
    getClient(): Client<boolean> {
        return this.client;
    }
}
