import React from "react";
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
     *  __ make the graph responsive
     *  __ ensure the graph works with a lot of transactions.
     *  __ write some tests
     */

    React.useEffect(() => {
        const storedUserAddress = localStorage.getItem("userAddress");

        if (storedUserAddress) {
            setUserAddress(storedUserAddress);
            client.getUserAddress(storedUserAddress).then((resp) => {
                setUser(resp);
            });
        }
        return () => localStorage.clear();
    }, [setUserAddress, setUser]);

    function handleUserSubmit(address: string): void {
        if (!address) setInvalidSigin(true);

        client.getUserAddress(address).then((resp) => {
            // resp = {balance: "0", transactions: Array(0)}
            if (isInvalidUser(resp)) {
                setInvalidSigin(true);
            } else {
                localStorage.setItem("userAddress", address);
                setUserAddress(address);
                setInvalidSigin(false);
                setUser(resp);
            }
        });
    }

    function handleSendTransaction(): void {
        // update user
        client.getUserAddress(userAddress).then((resp) => {
            setUser(resp);
        });
    }

    function handleSignout(): void {
        localStorage.clear();
        setUser(null);
    }

    return (
        <div>
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
