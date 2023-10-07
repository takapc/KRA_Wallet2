import { GetUser } from "../db/user";
import { Command, KRAMessage } from "../types/command";
import { errorHandle } from "../utils/utils";

export const db: Command = {
    name: "db",
    execute: async (message: KRAMessage) => {
        const member =
            message.msg.mentions.members.first() || message.msg.author;
        await GetUser(member.id)
            .then((user) => {
                message.send(`PC: ${user.pc}`);
            })
            .catch(() => {
                errorHandle(message);
            });
    },
};
