import * as React from "react";
import { Box } from "@chakra-ui/react";
import SubTitle from "../SubTitle";
import Graph from "../Graph";

const HistoryGraph: React.FC = () => {
    return (
        <Box background="gray.100">
            <SubTitle title="Transaction History" />
            <Graph />
        </Box>
    );
};

export default HistoryGraph;
