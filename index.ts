import * as http from "http";
import debug from "debug";
import App from './app';
import { AddressInfo } from "net";

debug("ts-express:server");

const startServer = () => {
    const port = process.env.PORT || 8080;

    const server = http.createServer(App);
    server.listen(port);

    const onError = (error: NodeJS.ErrnoException) => {
        console.log("Something has gone terribly wrong!");
        console.error(error);
    };

    const onListening = () => {
        let addr = server.address() as AddressInfo;
        console.log(`Listening at ${addr.address}:${port}`);
    };

    server.on("error", onError);
    server.on("listening", onListening);
};

startServer();