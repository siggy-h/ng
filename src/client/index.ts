import axios from "axios";

// http://jobcoin.gemini.com/elbow-shape/api/addresses/{address}

// http://jobcoin.gemini.com/elbow-shape/api/transactions

const baseURL = "http://jobcoin.gemini.com/elbow-shape/api";

export async function getUserAddress(address: string) {
    try {
        const response = await axios.get(`${baseURL}/addresses/${address}`);
        console.log("get user resp: ", response);
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
        console.log("sendJobcoin resp: ,", response);
        return response.data;
    } catch (error) {
        console.log("sendJobcoin error: ", error);
    }
}
