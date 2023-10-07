import { Command, KRAMessage } from "../types/command";

export const credit: Command = {
    name: "credit",
    execute: (message: KRAMessage) => {
        message.send("Created by @takap_c");
    },
};
