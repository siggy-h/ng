import { DateTime } from "luxon";
import { Transaction, UserData } from "./types";

export function isInvalidUser(user: UserData): boolean {
    const { balance, transactions } = user;
    return parseInt(balance) === 0 && transactions.length === 0;
}

export interface GraphData {
    amount: number;
    credit: boolean;
    label: string;
    time: string;
    timestamp: string;
}

export function transformTransationsToGraph(
    transactions: Transaction[],
    userAddress: string
): GraphData[] {
    return transactions.map((t) => tranactionToGData(t, userAddress));
}

export function tranactionToGData(
    usertransactions: Transaction,
    userAddress: string
): GraphData {
    const { amount, timestamp, toAddress, fromAddress } = usertransactions;

    // if the toAddress is the same as userAddress this is a credit
    const isCredit: boolean = userAddress === toAddress;
    const time = DateTime.fromISO(timestamp).toFormat("LL/dd");

    /**
     * If this is a credit show who it's from, if any.
     * Otherwise this is a debit, show who it was sent to */
    const label = isCredit ? fromAddress ?? "" : toAddress;

    const result = {
        amount: parseInt(amount),
        credit: isCredit,
        label: label,
        time: time,
        timestamp: timestamp,
    };

    return result;
}
