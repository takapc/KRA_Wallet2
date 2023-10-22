import { ActionRowBuilder, ButtonBuilder, ButtonInteraction } from "discord.js";
import { KRAInteraction } from "../types/command";
import { Random } from "../utils/utils";
import { tintiroBtn } from "../components/buttons";

export const tintiro: KRAInteraction = {
    name: "tintiro",
    execute: async (interaction: ButtonInteraction) => {
        const r = [Random(1, 6), Random(1, 6), Random(1, 6)];
        const dices = [
            "",
            "<:saikoro_1:1162345977387167824>",
            "<:saikoro_2:1162345981120090142>",
            "<:saikoro_3:1162345982734905465>",
            "<:saikoro_4:1162345985280839751>",
            "<:saikoro_5:1162345987877118024>",
            "<:saikoro_6:1162346084484526130>",
        ];
        await interaction.reply({
            content:
                `${interaction.user.username}\n` +
                dices[r[0]] +
                dices[r[1]] +
                dices[r[2]],
            components: [
                new ActionRowBuilder<ButtonBuilder>().addComponents(tintiroBtn),
            ],
        });
    },
};
