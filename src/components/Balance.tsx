import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
    balance: string | null;
}

const Balance: React.FC<Props> = ({ balance }) => {
    return (
        <Flex
            direction="column"
            bg="gray.100"
            height="200px"
            mb="5"
            align="center"
            justify="center"
        >
            <Flex
                flex="1"
                borderBottom="1px"
                borderColor="gray.500"
                p="5px"
                align="center"
                alignSelf="stretch"
                justify="center"
            >
                <Text fontSize="18px"> Jobcoin Balance</Text>
            </Flex>
            <Flex flex="3" align="center" alignSelf="stretch" justify="center">
                <Text fontSize="24px"> {balance ?? balance}</Text>
            </Flex>
        </Flex>
    );
};

export default Balance;
