export interface KraUser {
    user_id: string;
    pc: number;
    created_at: string;
    updated_at: string;
}

export interface KraTransaction {
    transaction_id: string;
    amount: number;
    created_at: string;
    user_id: string;
}
