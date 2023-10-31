import axios from "axios";
import { KraTransaction, KraUser } from "../types/db";
import { endpoint } from "../constant";

const KraAuth = {
    username: process.env.API_USER,
    password: process.env.API_PASS,
};

export const GetUser = async (id: string): Promise<KraUser> => {
    return await axios
        .get(`${endpoint}/users/${id}`, { auth: KraAuth })
        .then(async (res) => {
            return res.data;
        });
};

export const GetAllUser = async (): Promise<KraUser[]> => {
    return await axios
        .get(`${endpoint}/users`, { auth: KraAuth })
        .then(async (res) => {
            return res.data;
        });
};

export const CreateUser = async (
    id: string,
    name: string
): Promise<KraUser> => {
    const user = {
        user_id: id,
        name: name,
        pc: 0,
    };
    return await axios
        .post(`${endpoint}/users`, user, { auth: KraAuth })
        .then((res) => res.data);
};

export const CreateTransaction = async (
    id: string,
    amount: number
): Promise<KraTransaction> => {
    return await axios
        .post(
            `${endpoint}/transactions/${id}?amount=${amount}`,
            {},
            { auth: KraAuth }
        )
        .then((res) => res.data);
};
