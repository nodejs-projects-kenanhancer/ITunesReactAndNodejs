type UrlBuilder = (limit: number)=>string;

export class Env {
    static PORT: number = parseInt(process.env.PORT as string, 10);

    static TOP_ALBUMS_URL: UrlBuilder = (limit: number): string => `${process.env.TOP_ALBUMS_URL}/limit=${limit}/json`;

    static TOP_SONGS_URL: UrlBuilder = (limit: number): string => `${process.env.TOP_SONGS_URL}/limit=${limit}/json`;
}