import {Env, Errors} from "../constants";

export function validateEnvironmentVariables(): void {
    if (!Env.PORT) {
        throw Errors.PORT_NOT_DEFINED;

        process.exit(1);
    }

    if (!Env.TOP_ALBUMS_URL) {
        throw Errors.TOP_ALBUMS_URL_NOT_DEFINED;

        process.exit(1);
    }

    if (!Env.TOP_SONGS_URL) {
        throw Errors.TOP_SONGS_URL_NOT_FOUND;

        process.exit(1);
    }
}