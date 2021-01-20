export interface IITunesController {
    getTopAlbums(limit: number): Promise<any>;

    getTopSongs(limit: number): Promise<any>;
}