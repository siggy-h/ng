import axios from "axios";

const baseURL = "http://jobcoin.gemini.com/elbow-shape/api";

export async function getUserAddress(address: string) {
    try {
        const response = await axios.get(`${baseURL}/addresses/${address}`);
        return response.data;
    } catch (error) {
        console.log("getUserAddress error: ", error);
    }
}

export async function sendJobcoin(
    fromAddress: string,
    toAddress: string,
    amount: number
) {
    try {
        const response = await axios.post(`${baseURL}/transactions`, {
            fromAddress: fromAddress,
            toAddress: toAddress,
            amount: amount,
        });
        return response.data;
    } catch (error) {
        debugger;
        return { error: "Insufficient Funds" };
    }
}
