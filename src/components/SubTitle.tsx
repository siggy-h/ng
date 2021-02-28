import * as React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
    title: string;
}
const SubTitle: React.FC<Props> = ({ title }) => {
    return (
        <Flex
            borderBottom="1px"
            borderColor="gray.400"
            p="10px"
            align="center"
            alignSelf="stretch"
            justify="center"
        >
            <Text fontSize="16px">{title}</Text>
        </Flex>
    );
};

export default SubTitle;
