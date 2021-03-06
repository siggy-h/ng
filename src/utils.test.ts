import { isInvalidUser, transformTransationsToGraph } from "./utils";
import { GraphData, UserData } from "./types";
import { graphData, stubData } from "./StubData";

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

test("transformTransationsToGraph transforms tranaction list to graph data", () => {
    const transactions = stubData.transactions;
    const testUserAddress = "Alice";
    const expected: GraphData[] = graphData;

    expect(
        transformTransationsToGraph(transactions, testUserAddress)
    ).toStrictEqual(expected);
});
