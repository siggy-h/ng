import { isInvalidUser } from "./utils";
import { UserData } from "./types";

test("isInvalidUser returns true with empty user", () => {
    const emptyUser: UserData = {
        balance: "0",
        transactions: [],
    };

    const actual = isInvalidUser(emptyUser);

    expect(actual).toBe(true);
});

test("isInvalidUser returns false with non-empty user", () => {
    const emptyUser: UserData = {
        balance: "22",
        transactions: [
            {
                amount: "50",
                timestamp: "2021-02-18T17:53:15.470Z",
                toAddress: "Alice",
                fromAddress: "BobsAddress",
            },
        ],
    };

    const actual = isInvalidUser(emptyUser);

    expect(actual).toBe(false);
});
