import RequestHandler from "../httpRequestHandler/requestHandler";
import {Env} from "../constants";

export class ITunesService {

    static async getTopAlbums(limit: number): Promise<any> {

        const requestArgs = {
            method: "GET",
            url: Env.TOP_ALBUMS_URL(limit),
            payload: undefined,
            headers: {}
        };

        const res: any = await RequestHandler.executeAsync(requestArgs);

        return res;
    }

    static async getTopSongs(limit: number): Promise<any> {

        const requestArgs = {
            method: "GET",
            url: Env.TOP_SONGS_URL(limit),
            payload: undefined,
            headers: {}
        };

        const res: any = await RequestHandler.executeAsync(requestArgs);

        return res;
    }
}