import { Flex } from "@chakra-ui/react";
import * as React from "react";
import Balance from "../components/Balance";
import HistoryGraph from "../components/HistoryGraph";
import Header from "../components/sections/Header";
import Send from "../components/Send";

interface Props {
    handleSignout: VoidFunction;
}
const Dashboard: React.FC<Props> = ({ handleSignout }) => {
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
                <Header handleSignout={handleSignout} />
            </Flex>
            <Flex direction="row" maxHeight="100%" align="stretch">
                <Flex direction="column" flex="1" p="5">
                    <Balance />
                    <Send />
                </Flex>
                <Flex flex="3" p="5">
                    <HistoryGraph />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Dashboard;
