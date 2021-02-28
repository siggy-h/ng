import React from "react";
import "./App.css";
import * as client from "./client";
import { UserContext } from "./context/UserContext";
import Dashboard from "./scenes/Dashboard";
import Signin from "./scenes/Signin";
import { UserData } from "./types";
import { isInvalidUser } from "./utils";

function App() {
    const [userAddress, setUserAddress] = React.useState("");
    const [invalidSignin, setInvalidSigin] = React.useState(false);
    const [user, setUser] = React.useState<UserData | null>(null);

    /**
     * TODO: Siggy :)
     *  __ handle 422 response for sendJobcoin
     *  __ make the graph
     *  __ write some tests
     */

    // TODO: remove this...
    React.useEffect(() => {
        client.getUserAddress("Alice").then((resp) => {
            setUser(resp);
            setUserAddress("Alice");
        });
    }, [setUser]);

    function handleUserSubmit(address: string): void {
        if (!address) setInvalidSigin(true);

        setUserAddress(address);
        setInvalidSigin(false);

        client.getUserAddress(address).then((resp) => {
            // resp = {balance: "0", transactions: Array(0)}
            if (isInvalidUser(resp)) {
                setInvalidSigin(true);
            } else {
                setUser(resp);
            }
        });
    }

    function updateUserData(): void {
        client.getUserAddress(userAddress).then((resp) => {
            setUser(resp);
        });
    }

    function handleSignout(): void {
        setUser(null);
    }

    function handleSendTransaction(destination: string, amount: number): void {
        client.sendJobcoin(userAddress, destination, amount).then((resp) => {
            debugger;
            updateUserData();
        });
    }

    return (
        <div className="App">
            {!user && (
                <Signin
                    onSubmit={handleUserSubmit}
                    invalidSignin={invalidSignin}
                />
            )}
            {user && !invalidSignin && (
                <UserContext.Provider value={{ userAddress, user }}>
                    <Dashboard
                        signout={handleSignout}
                        sendTransaction={handleSendTransaction}
                    />
                </UserContext.Provider>
            )}
        </div>
    );
}

export default App;
