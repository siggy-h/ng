import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as React from "react";
import * as client from "../client";
import { UserContext } from "../context/UserContext";
import SubTitle from "./SubTitle";

interface Props {
    sendTransaction: VoidFunction;
}

const Send: React.FC<Props> = ({ sendTransaction }) => {
    const [destination, setDestination] = React.useState<string | null>(null);
    const [sendAmount, setSendAmount] = React.useState<string>("0");
    const [sendMessage, setSendMessage] = React.useState(null);

    const { userAddress } = React.useContext(UserContext);

    function canContinue(): boolean {
        return !!destination && amountIsValid() && parseInt(sendAmount) !== 0;
    }

    function amountIsValid(): boolean {
        return !isNaN(parseInt(sendAmount));
    }

    function clearAmount(): void {
        setSendAmount("0");
    }

    function clearState(): void {
        setDestination(null);
        clearAmount();
        setSendMessage(null);
    }

    function handleSendJobCoin(): void {
        if (destination === null || !amountIsValid()) return;

        client
            .sendJobcoin(userAddress, destination, parseInt(sendAmount))
            .then((resp) => {
                if (resp.error) {
                    setSendMessage(resp.error);
                    clearAmount();
                } else {
                    sendTransaction();
                    clearState();
                }
            });
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
                {sendMessage && <p>Insufficent Funds</p>}
                <Button
                    loadingText="Submitting"
                    colorScheme="teal"
                    variant="solid"
                    m="10px"
                    disabled={!canContinue()}
                    onClick={() => handleSendJobCoin()}
                >
                    Send Jobcoin
                </Button>
            </Flex>
        </Flex>
    );
};

export default Send;
