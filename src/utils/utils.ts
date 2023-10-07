import { KRAMessage } from "../types/command";

export const getArgs = (msg: KRAMessage): string[] =>
    msg.msg.content.split(" ");

export const errorHandle = (msg: KRAMessage): void => {
    msg.send("Server Internal Error");
};
