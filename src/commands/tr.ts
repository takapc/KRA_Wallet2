import { CreateTransaction } from "../db/user";
import { Command, KRAMessage } from "../types/command";
import { errorHandle, getArgs } from "../utils/utils";

export const tr: Command = {
    name: "tr",
    execute: async (message: KRAMessage) => {
        const member = message.msg.mentions.members.first();
        const amount = Number(getArgs(message)[2]);
        if (
            member == undefined ||
            !message.msg.member.permissions.has("BanMembers")
        ) {
            return errorHandle(message);
        }
        await CreateTransaction(member.id, amount)
            .then((transaction) => {
                message.send(JSON.stringify(transaction));
            })
            .catch((e) => {
                console.log(e);
                errorHandle(message);
            });
    },
};
