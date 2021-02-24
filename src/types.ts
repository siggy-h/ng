export interface Transactions {
    amount: string; // "50"
    timestamp: string; // "2021-02-18T17:53:15.470Z"
    toAddress: string; // "Alice"
    fromAddress?: string; // "BobsAddress"
}

export interface UserData {
    balance: string;
    transactions: ReadonlyArray<Transactions>;
}
