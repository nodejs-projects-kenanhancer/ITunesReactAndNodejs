import {BaseError} from "../errors/baseError";
import {ApplicationError, DownstreamError, InternalServerError} from "../errors";

export class Errors {
    static INTERNAL_SERVER_ERROR: (message?: string, error?: any) => BaseError = (message?: string, error?: any) => new InternalServerError("INTERNAL_SERVER_ERROR", message || "Something happened :(", error);

    static DOWNSTREAM_ERROR: BaseError = new DownstreamError("DOWNSTREAM_ERROR", "Downstream service not working!");

    static PORT_NOT_DEFINED: BaseError = new ApplicationError("PORT_NOT_DEFINED", "PORT is not defined in .env file");

    static TOP_ALBUMS_URL_NOT_DEFINED: BaseError = new ApplicationError("TOP_ALBUMS_URL_NOT_DEFINED", "TOP_ALBUMS_URL is not defined in .env file");

    static TOP_SONGS_URL_NOT_FOUND: BaseError = new ApplicationError("TOP_SONGS_URL_NOT_FOUND", "TOP_SONGS_URL is not defined in .env file");
}