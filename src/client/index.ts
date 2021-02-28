import axios from "axios";

// http://jobcoin.gemini.com/elbow-shape/api/addresses/{address}

// http://jobcoin.gemini.com/elbow-shape/api/transactions

const baseURL = "http://jobcoin.gemini.com/elbow-shape/api";

export async function getUserAddress(address: string) {
    try {
        const response = await axios.get(`${baseURL}/addresses/${address}`);
        console.log("resp: ,", response);
        return response.data;
    } catch (error) {
        console.log("getUserAddress error: ", error);
    }
}

export async function sendJobcoin(
    fromAddress: string,
    toAddress: string,
    amount: string
) {
    try {
        const response = await axios.post(`${baseURL}/transactions`, {
            fromAddress,
            toAddress,
            amount,
        });
        console.log("resp: ,", response);
        return response.data;
    } catch (error) {
        console.log("sendJobcoin error: ", error);
    }
}
