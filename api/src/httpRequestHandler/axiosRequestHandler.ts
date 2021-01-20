import axios, { AxiosRequestConfig } from "axios";

export default async function executeAsync(requestConfig: AxiosRequestConfig): Promise<any> {
    const axiosRes = await axios(requestConfig);

    return axiosRes.data;
}