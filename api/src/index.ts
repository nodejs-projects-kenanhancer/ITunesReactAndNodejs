import * as dotenv from "dotenv";

dotenv.config({path: `.env${(process.env.NODE_ENV && `.${process.env.NODE_ENV}`) || ""}`});

import {validateEnvironmentVariables} from "./boot";
import {httpServer} from "./server";

const main: () => void = () => {
    try {
        validateEnvironmentVariables();

        httpServer.listen();
    } catch (e) {
        console.log(e);
    }
};

main();