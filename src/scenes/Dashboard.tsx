import * as React from "react";
import { Flex } from "@chakra-ui/react";
import Balance from "../components/Balance";
import HistoryGraph from "../components/sections/HistoryGraph";
import Header from "../components/sections/Header";
import Send from "../components/Send";

interface Props {
    signout: VoidFunction;
    sendTransaction: () => void;
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

            <Flex direction="row" p="20px">
                <Flex direction="column" flex="1">
                    <Balance />
                    <Send sendTransaction={sendTransaction} />
                </Flex>
                <Flex direction="column" flex="3" ml="20px" mr="10px">
                    <HistoryGraph />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Dashboard;
