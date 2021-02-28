import { Flex } from "@chakra-ui/react";
import * as React from "react";
import Balance from "../components/Balance";
import HistoryGraph from "../components/HistoryGraph";
import Header from "../components/sections/Header";
import Send from "../components/Send";

interface Props {
    signout: VoidFunction;
    sendTransaction: (destination: string, amount: number) => void;
}
const Dashboard: React.FC<Props> = ({ signout, sendTransaction }) => {
    return (
        <Flex direction="column">
            <Flex
                borderBottom="1px"
                borderColor="gray.500"
                p="10px"
                justify="stretch"
                pl="5"
                pr="5"
            >
                <Header handleSignout={signout} />
            </Flex>
            <Flex direction="row" maxHeight="100%" align="stretch">
                <Flex direction="column" flex="1" p="5">
                    <Balance />
                    <Send sendTransaction={sendTransaction} />
                </Flex>
                <Flex flex="3" p="5">
                    <HistoryGraph />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Dashboard;
