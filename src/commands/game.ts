import { ActionRowBuilder, ButtonBuilder } from "discord.js";
import { Command, KRAMessage } from "../types/command";
import { tintiroBtn } from "../components/buttons";

export const game: Command = {
    name: "game",
    execute: async (message: KRAMessage) => {
        const register = new ActionRowBuilder<ButtonBuilder>().addComponents(
            tintiroBtn
        );
        message.msg.channel.send({
            content: "```ギャンブル```",
            components: [register],
        });
    },
};
