import * as React from "react";
import { Box, Icon } from "@chakra-ui/react";

export const GraphColors = {
    credit: "#38B2AC",
    debit: "#E53E3E",
};

const CircleIcon = (props: any) => (
    <Icon viewBox="0 0 200 200" {...props}>
        <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
    </Icon>
);

const GraphKey: React.FC = () => {
    return (
        <Box>
            <CircleIcon boxSize={6} color={GraphColors.credit} m={1} />
            Received
            <CircleIcon boxSize={6} color={GraphColors.debit} ml={2} mr={1} />
            Sent
        </Box>
    );
};

export default GraphKey;
