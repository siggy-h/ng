import { Box, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import Header from "../components/sections/Header";

const Dashboard: React.FC = () => {
    return (
        <Flex direction="column">
            <Flex borderBottom="1px" p="5px" justify="stretch" pl="5" pr="5">
                <Header />
            </Flex>
            <Flex direction="row" maxHeight="100%" align="stretch">
                <Flex direction="column" flex="1" p="5">
                    <Box bg="red.200" height="150px" mb="5">
                        <Text fontSize="24px"> Balance Widget</Text>
                    </Box>
                    <Box bg="red.200" height="150px">
                        <Text fontSize="24px"> Send Jobcoin Widget</Text>
                    </Box>
                </Flex>
                <Flex flex="3" p="5">
                    <Box bg="red.200" width="100%">
                        <Text fontSize="40px">Graph</Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Dashboard;
