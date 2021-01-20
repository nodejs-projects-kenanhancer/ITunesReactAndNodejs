export interface IITunesController {
    getTopAlbums(limit: number, genre: number): Promise<any>;

    getTopSongs(limit: number, genre: number): Promise<any>;
}