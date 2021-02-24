import { CheckCircleIcon } from "@chakra-ui/icons";
import { Flex, Text, Button, Avatar } from "@chakra-ui/react";
import * as React from "react";
import { UserData } from "../../types";

interface HeaderProps {
    user: UserData | null;
    handleSignout: VoidFunction;
}

const Header: React.FC<HeaderProps> = ({ user, handleSignout }) => {
    return (
        <>
            <Flex flex="1" align="center">
                <CheckCircleIcon w={8} h={8} color="teal" mr="2" />
            </Flex>
            <Flex flex="1" align="center" justify="flex-end">
                <Avatar size="xs" name="Tom Selek" mr="2" />
                <Text>Signed In</Text>
                <Button
                    ml="5"
                    colorScheme="teal"
                    variant="link"
                    onClick={handleSignout}
                >
                    Sign Out
                </Button>
            </Flex>
        </>
    );
};

export default Header;
