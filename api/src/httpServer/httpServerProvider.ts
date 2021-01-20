import {HttpServer} from "./base";
import {ExpressHttpServer} from "./expressHttpServer";

export default class HttpServerProvider {

    public static getHttpServer(PORT: number): HttpServer {
        const httpServer: HttpServer = new ExpressHttpServer(PORT);

        return httpServer;
    }

}
