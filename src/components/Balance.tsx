import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";
import SubTitle from "./SubTitle";
import { UserContext } from "../context/UserContext";

const Balance: React.FC = () => {
    const { user } = React.useContext(UserContext);

    return (
        <Flex
            direction="column"
            bg="gray.100"
            height="150px"
            mb="5"
            align="center"
            justify="center"
        >
            <SubTitle title="Jobcoin Balance" />
            <Flex flex="3" align="center" alignSelf="stretch" justify="center">
                <Text fontSize="24px">{user.balance ?? user.balance}</Text>
            </Flex>
        </Flex>
    );
};

export default Balance;
