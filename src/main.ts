import { GatewayIntentBits, Client, Partials, Message } from "discord.js";
import { Command, KRAMessage } from "./types/command";
import { credit } from "./commands/credit";
import "dotenv/config";
import { db } from "./commands/db";
import { create } from "./commands/create";
import { tr } from "./commands/tr";
import { all } from "./commands/all";

const CommandList: Command[] = [credit, db, create, tr, all];

const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Message, Partials.Channel],
});

client.once("ready", () => {
    console.log("Ready✅");
    if (client.user) {
        console.log(client.user.tag);
    }
});

client.on("messageCreate", async (message: Message) => {
    if (message.author.bot) return;
    for (const c of CommandList) {
        if (message.content.split(" ")[0] == `.${c.name}`) {
            c.execute(new KRAMessage(message, client));
        }
    }
});

client.login(process.env.TOKEN);
