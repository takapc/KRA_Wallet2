import { CreateTransaction, GetUser } from "../db/user";
import { Command, KRAMessage } from "../types/command";
import { errorHandle, getArgs } from "../utils/utils";

export const send: Command = {
    name: "send",
    execute: async (message: KRAMessage) => {
        const sendingId = message.msg.author.id;
        const receivingId =
            message.msg.mentions.members.first()?.id ?? sendingId;
        if (sendingId === receivingId) return errorHandle(message);
        const sending = await GetUser(sendingId);
        const receiving = await GetUser(receivingId);
        const amount = Number(getArgs(message)[2]);
        if (amount > sending.pc || amount < 0) return errorHandle(message);
        await CreateTransaction(sendingId, -amount)
            .then(async () =>
                CreateTransaction(receivingId, amount).then(() => {
                    message.send(`Sent ${amount}Pc to ${receiving.name}`);
                })
            )
            .catch(() => {
                errorHandle(message);
            });
    },
};
