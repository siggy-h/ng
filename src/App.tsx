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

    // TODO: remove this...
    React.useEffect(() => {
        client.getUserAddress("Alice").then((resp) => setUser(resp));
    }, [setUser]);

    function handleUserSubmit(userAddress: string): void {
        if (!userAddress) setInvalidSigin(true);

        setUserAddress(userAddress);
        setInvalidSigin(false);

        client.getUserAddress(userAddress).then((resp) => {
            // resp = {balance: "0", transactions: Array(0)}
            if (isInvalidUser(resp)) {
                setInvalidSigin(true);
            } else {
                setUser(resp);
            }
        });
    }

    function handleSignout(): void {
        setUser(null);
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
                    <Dashboard handleSignout={handleSignout} />
                </UserContext.Provider>
            )}
        </div>
    );
}

export default App;
