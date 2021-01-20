import {default as axiosExecuteAsync} from "./axiosRequestHandler";

export async function executeAsync(requestConfig) {
    try {
        const axiosRes = await axiosExecuteAsync(requestConfig);

        return axiosRes;
    } catch (error) {
        return new Error('An error occured. Please reload the page.');
    }
}