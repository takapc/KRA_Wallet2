import { GatewayIntentBits, Client, Partials, Message } from "discord.js";
import { Command, KRAInteraction, KRAMessage } from "./types/command";
import { credit } from "./commands/credit";
import "dotenv/config";
import { db } from "./commands/db";
import { create } from "./commands/create";
import { tr } from "./commands/tr";
import { all } from "./commands/all";
import { game } from "./commands/game";
import { tintiro } from "./interactions/tintiro";
import { send } from "./commands/send";

const CommandList: Command[] = [credit, db, create, tr, all, game, send];
const InteractionList: KRAInteraction[] = [tintiro];

export const client = new Client({
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

client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
        const id = interaction.customId;
        for (const i of InteractionList) {
            if (id == i.name) {
                await i.execute(interaction);
            }
        }
    }
});

client.login(process.env.TOKEN);
