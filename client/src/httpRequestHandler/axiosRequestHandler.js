import axios from "axios";

export default async function executeAsync(requestConfig) {
    const axiosRes = await axios(requestConfig);

    return axiosRes.data;
}