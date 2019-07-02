"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const debug_1 = __importDefault(require("debug"));
const app_1 = __importDefault(require("./app"));
debug_1.default("ts-express:server");
const startServer = () => {
    const port = process.env.PORT || 8080;
    const server = http.createServer(app_1.default);
    server.listen(port);
    const onError = (error) => {
        console.log("Something has gone terribly wrong!");
        console.error(error);
    };
    const onListening = () => {
        let addr = server.address();
        console.log(`Listening at ${addr.address}:${port}`);
    };
    server.on("error", onError);
    server.on("listening", onListening);
};
startServer();
//# sourceMappingURL=index.js.map