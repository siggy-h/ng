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

const Signin: React.FC = () => {
    return (
        <Container centerContent mt="24" w="100%">
            <CheckCircleIcon w={24} h={24} color="teal" mb="10" />
            <Box maxW="lg" borderWidth="1px" borderRadius="lg" border="1px">
                <Box p="6">
                    <Heading as="h3" size="lg">
                        Welcome!{" "}
                    </Heading>
                    <Text>Sign in with your Jobcoin Address</Text>
                </Box>
                <Box p="10" borderTop="1px">
                    <Flex direction="column">
                        <Input
                            mb="18"
                            // isInvalid
                            errorBorderColor="red.300"
                            placeholder="Your Jobcoin Address"
                        />

                        <Button
                            // isLoading
                            loadingText="Submitting"
                            colorScheme="teal"
                            variant="solid"
                        >
                            Submit
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Container>
    );
};

export default Signin;
