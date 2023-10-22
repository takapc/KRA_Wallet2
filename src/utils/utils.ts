import { KRAMessage } from "../types/command";

export const getArgs = (msg: KRAMessage): string[] =>
    msg.msg.content.split(" ");

export const errorHandle = (msg: KRAMessage): void => {
    msg.send("Server Internal Error");
};

export const Random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};
