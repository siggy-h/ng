import * as React from "react";
import { UserData } from "../types";

export interface Context {
    userAddress: string;
    user: UserData;
}

export const defaultUser: UserData = {
    balance: "0",
    transactions: [],
};

export const defaultContext: Context = {
    userAddress: "",
    user: defaultUser,
};

export const UserContext = React.createContext(defaultContext);
export const UserProvider = UserContext.Provider;
