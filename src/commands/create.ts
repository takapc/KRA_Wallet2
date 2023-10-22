import { CreateUser } from "../db/user";
import { Command, KRAMessage } from "../types/command";
import { errorHandle } from "../utils/utils";

export const create: Command = {
    name: "create",
    execute: async (message: KRAMessage) => {
        const member = message.msg.author;
        await CreateUser(member.id, member.username)
            .then((user) => {
                message.send(JSON.stringify(user));
            })
            .catch(() => {
                errorHandle(message);
            });
    },
};
