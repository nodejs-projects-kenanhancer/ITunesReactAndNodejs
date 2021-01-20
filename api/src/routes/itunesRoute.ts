import {IRouter, Request, Response, Router} from "express";
import {NextHandleFunction} from "../httpServer";
import {IITunesController, ITunesController} from "../controllers";
import {asyncHandler} from "../utils";

export function itunesRoute(): NextHandleFunction {

    const router: IRouter = Router();
    const itunesController: IITunesController = new ITunesController();

    router.get("/gettopalbums/limit=:limit/genre=:genre/:output",
        asyncHandler(async (request: Request, response: Response, next: any): Promise<void> => {

            const limit: number = parseInt(request.params.limit, 10);

            const genre: number = parseInt(request.params.genre, 10);

            const res: any = await itunesController.getTopAlbums(limit, genre);

            response.send(res);

            return next;
        }));

    router.get("/gettopsongs/limit=:limit/genre=:genre/:output",
        asyncHandler(async (request: Request, response: Response, next: any): Promise<void> => {

            const limit: number = parseInt(request.params.limit, 10);

            const genre: number = parseInt(request.params.genre, 10);

            const res: any = await itunesController.getTopSongs(limit, genre);

            response.send(res);

            return next;
        }));

    return router;

}