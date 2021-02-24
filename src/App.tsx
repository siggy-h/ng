import React from "react";
import "./App.css";
import * as client from "./client";
import Dashboard from "./scenes/Dashboard";
import Signin from "./scenes/Signin";
import { isInvalidUser } from "./utils";

function App() {
    const [user, setUser] = React.useState(null);
    const [invalidSignin, setInvalidSigin] = React.useState(false);

    function handleUserSubmit(userAddress: string): void {
        if (!userAddress) setInvalidSigin(true);

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
                <Dashboard user={user} handleSignout={handleSignout} />
            )}
        </div>
    );
}

export default App;
