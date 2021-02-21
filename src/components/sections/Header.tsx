import { CheckCircleIcon } from "@chakra-ui/icons";
import { Flex, Text, Box, Button, Avatar } from "@chakra-ui/react";
import * as React from "react";

const Header = () => {
    return (
        <>
            <Flex flex="1" align="center">
                <CheckCircleIcon w={8} h={8} color="teal" mr="2" />
                <Text>Tom Selek</Text>
            </Flex>
            <Flex flex="1" align="center" justify="flex-end">
                <Avatar size="xs" name="Tom Selek" mr="2" />
                <Text>Signed In</Text>
                <Button ml="5" colorScheme="teal" variant="link">
                    Sign Out
                </Button>
            </Flex>
        </>
    );
};

export default Header;
