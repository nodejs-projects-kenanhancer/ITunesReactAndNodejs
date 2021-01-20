import RequestHandler from "../httpRequestHandler/requestHandler";
import {Env} from "../constants";

export class ITunesService {

    static async getTopAlbums(limit: number, genre: number): Promise<any> {

        const requestArgs = {
            method: "GET",
            url: Env.TOP_ALBUMS_URL(limit, genre),
            payload: undefined,
            headers: {}
        };

        const res: any = await RequestHandler.executeAsync(requestArgs);

        return res;
    }

    static async getTopSongs(limit: number, genre: number): Promise<any> {

        const requestArgs = {
            method: "GET",
            url: Env.TOP_SONGS_URL(limit, genre),
            payload: undefined,
            headers: {}
        };

        const res: any = await RequestHandler.executeAsync(requestArgs);

        return res;
    }
}