import { CheckCircleIcon } from "@chakra-ui/icons";

import {
    Box,
    Text,
    Container,
    Flex,
    Heading,
    Input,
    Button,
} from "@chakra-ui/react";
import * as React from "react";

interface Props {
    onSubmit: (userAddress: string) => void;
    invalidSignin: boolean;
}

const Signin: React.FC<Props> = ({ onSubmit, invalidSignin }) => {
    const [addressInput, setAddressInput] = React.useState("");

    function handleSubmit() {
        setAddressInput("");
        onSubmit(addressInput);
    }

    return (
        <Container centerContent mt="24" w="100%">
            <CheckCircleIcon w={24} h={24} color="teal" mb="10" />
            <Box maxW="lg" borderWidth="1px" borderRadius="lg" border="1px">
                <Box p="6">
                    <Heading as="h3" size="lg">
                        Welcome!
                    </Heading>
                    <Text>Sign in with your Jobcoin Address</Text>
                </Box>
                <Box p="10" borderTop="1px">
                    <Flex direction="column">
                        <Input
                            isInvalid={invalidSignin}
                            errorBorderColor="red.300"
                            placeholder="Your Jobcoin Address"
                            value={addressInput}
                            onChange={(ev) => setAddressInput(ev.target.value)}
                        />
                        <Button
                            loadingText="Submitting"
                            colorScheme="teal"
                            variant="solid"
                            mt="10px"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                        {invalidSignin && (
                            <Text mt="5px" color="tomato">
                                Invalid Signin
                            </Text>
                        )}
                    </Flex>
                </Box>
            </Box>
        </Container>
    );
};

export default Signin;
