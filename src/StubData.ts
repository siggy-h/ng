import { GraphData, UserData } from "./types";

export const stubData: UserData = {
    balance: "4.5",
    transactions: [
        {
            timestamp: "2021-02-18T17:53:15.470Z",
            toAddress: "Alice",
            amount: "50",
        },
        {
            timestamp: "2021-02-18T17:53:15.473Z",
            fromAddress: "Alice",
            toAddress: "Bob",
            amount: "12.5",
        },
        {
            timestamp: "2021-02-28T02:29:27.057Z",
            fromAddress: "Alice",
            toAddress: "ddd",
            amount: "33",
        },
        {
            timestamp: "2021-02-28T02:33:47.883Z",
            toAddress: "Alice",
            amount: "50",
        },
        {
            timestamp: "2021-02-28T02:39:20.007Z",
            fromAddress: "Alice",
            toAddress: "ddd",
            amount: "50",
        },
    ],
};

export const graphData: GraphData[] = [
    {
        amount: 50,
        credit: true,
        label: "",
        time: "02/18",
        timestamp: "2021-02-18T17:53:15.470Z",
    },
    {
        amount: 12,
        credit: false,
        label: "Bob",
        time: "02/18",
        timestamp: "2021-02-18T17:53:15.473Z",
    },
    {
        amount: 33,
        credit: false,
        label: "ddd",
        time: "02/27",
        timestamp: "2021-02-28T02:29:27.057Z",
    },
    {
        amount: 50,
        credit: true,
        label: "",
        time: "02/27",
        timestamp: "2021-02-28T02:33:47.883Z",
    },
    {
        amount: 50,
        credit: false,
        label: "ddd",
        time: "02/27",
        timestamp: "2021-02-28T02:39:20.007Z",
    },
];
