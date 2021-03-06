export interface Transaction {
    amount: string; // "50"
    timestamp: string; // "2021-02-18T17:53:15.470Z"
    toAddress: string; // "Alice"
    fromAddress?: string; // "BobsAddress"
}

export interface UserData {
    balance: string;
    transactions: Array<Transaction>;
}

export interface GraphData {
    amount: number;
    credit: boolean;
    label: string;
    time: string;
    timestamp: string;
}
