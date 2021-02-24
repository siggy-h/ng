import { UserData } from "./types";

export function isInvalidUser(user: UserData): boolean {
    const { balance, transactions } = user;
    return parseInt(balance) === 0 && transactions.length === 0;
}
