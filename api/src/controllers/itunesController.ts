import {IITunesController} from "./iitunesController";
import {ITunesService} from "../downstreams";

export class ITunesController implements IITunesController {
    public async getTopAlbums(limit: number, genre: number): Promise<any> {
        const albums: any = await ITunesService.getTopAlbums(limit, genre);

        return albums;
    }

    public async getTopSongs(limit: number, genre: number): Promise<any> {
        const songs: any = await ITunesService.getTopSongs(limit, genre);

        return songs;
    }
}