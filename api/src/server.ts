import { HttpServer } from "./httpServer/base";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { itunesRoute } from "./routes";
import { appErrorMiddleware } from "./middlewares";
import HttpServerProvider from "./httpServer/httpServerProvider";
import {Env} from "./constants";

const httpServer: HttpServer = HttpServerProvider.getHttpServer(Env.PORT)
    .useMiddleware(bodyParser.json()) // using bodyParser to parse JSON bodies into JS objects
    .useMiddleware(bodyParser.urlencoded({ extended: true })) // support application/x-www-form-urlencoded post data
    .useMiddleware(cors()) // enabling CORS(Cross-origin resource sharing) for all requests
    .useMiddleware(helmet()) // adding Helmet to enhance your API's security
    .useRoute("/aula/api", itunesRoute())
    .useMiddleware(appErrorMiddleware())
    .onClose(() => console.log('Http server closed.'))
    .onListening(() => console.log(`Listening on port ${Env.PORT}`));

export { httpServer };