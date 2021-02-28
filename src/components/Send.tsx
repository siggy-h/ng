import * as React from "react";
import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import SubTitle from "./SubTitle";

interface Props {
    sendTransaction: (destination: string, amount: number) => void;
}

const Send: React.FC<Props> = ({ sendTransaction }) => {
    const [destination, setDestination] = React.useState<string | null>(null);
    const [sendAmount, setSendAmount] = React.useState<string>("0");

    function canContinue(): boolean {
        return !!destination && amountIsValid() && parseInt(sendAmount) !== 0;
    }

    function amountIsValid(): boolean {
        const amt = parseInt(sendAmount);

        return !isNaN(amt);
    }

    function handleSubmit() {
        if (destination === null || !amountIsValid()) return;
        sendTransaction(destination, parseInt(sendAmount));
        setDestination(null);
        setSendAmount("0");
    }

    return (
        <Flex
            direction="column"
            bg="gray.100"
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
                        value={destination ?? ""}
                        onChange={(ev) => setDestination(ev.target.value)}
                    />
                </FormControl>
                <FormControl id="amount" isRequired mb="15px">
                    <FormLabel color="gray.500" fontSize="sm">
                        Amount to Send
                    </FormLabel>
                    <Input
                        size="sm"
                        isInvalid={!amountIsValid()}
                        borderColor="teal.400"
                        focusBorderColor="teal.300"
                        placeholder="Enter number"
                        value={sendAmount ?? ""}
                        onChange={(ev) => setSendAmount(ev.target.value)}
                    />
                </FormControl>
                <Button
                    loadingText="Submitting"
                    colorScheme="teal"
                    variant="solid"
                    m="10px"
                    disabled={!canContinue()}
                    onClick={handleSubmit}
                >
                    Send Jobcoin
                </Button>
            </Flex>
        </Flex>
    );
};

export default Send;
