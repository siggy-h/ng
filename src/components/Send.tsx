import * as React from "react";
import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import SubTitle from "./SubTitle";

const Send: React.FC = () => {
    return (
        <Flex
            direction="column"
            bg="gray.100"
            // height="250px"
            p="15"
            align="center"
            justify="center"
        >
            <SubTitle title="Send Jobcoin" />
            <Flex
                direction="column"
                flex="3"
                align="center"
                alignSelf="stretch"
                justify="center"
                m="20px"
            >
                <FormControl id="destination" isRequired mb="15px">
                    <FormLabel color="gray.500" fontSize="sm">
                        Destination Address
                    </FormLabel>
                    <Input
                        size="sm"
                        borderColor="teal.400"
                        focusBorderColor="teal.300"
                        placeholder="Enter address"
                    />
                </FormControl>
                <FormControl id="amount" isRequired mb="15px">
                    <FormLabel color="gray.500" fontSize="sm">
                        Amount to Send
                    </FormLabel>
                    <Input
                        type="number"
                        size="sm"
                        borderColor="teal.400"
                        focusBorderColor="teal.300"
                        placeholder="Enter number"
                    />
                </FormControl>
                <Button
                    loadingText="Submitting"
                    colorScheme="teal"
                    variant="solid"
                    m="10px"
                    // onClick={handleSubmit}
                >
                    Send Jobcoin
                </Button>
            </Flex>
        </Flex>
    );
};

export default Send;
