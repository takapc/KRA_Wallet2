import { GetAllUser } from "../db/user";
import { Command, KRAMessage } from "../types/command";
import { KraUser } from "../types/db";
import { errorHandle } from "../utils/utils";

export const all: Command = {
    name: "all",
    execute: async (message: KRAMessage) => {
        await GetAllUser()
            .then(async (users) => {
                await Promise.all(
                    users.map(
                        async (e: KraUser) =>
                            (
                                await message.getClient().users.fetch(e.user_id)
                            ).username +
                            ": " +
                            e.pc +
                            "PC"
                    )
                ).then((realSending) => {
                    message.send(realSending.join("\n"));
                });
            })
            .catch(() => {
                errorHandle(message);
            });
    },
};
