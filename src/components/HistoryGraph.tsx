import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import SubTitle from "./SubTitle";

const HistoryGraph: React.FC = () => {
    return (
        <Box bg="red.200" width="100%">
            <SubTitle title="Transaction History" />
            <Text fontSize="40px">Graph</Text>
        </Box>
    );
};

export default HistoryGraph;
