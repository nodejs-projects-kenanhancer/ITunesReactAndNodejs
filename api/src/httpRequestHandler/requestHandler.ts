import executeAsync from "./axiosRequestHandler";

export default class RequestHandler {

    public static async executeAsync(requestConfig: any): Promise<any> {
        try {
            const axiosRes = await executeAsync(requestConfig);

            return axiosRes;
        } catch (error) {
            return new Error('An error occured. Please reload the page.');
        }
    }

}
