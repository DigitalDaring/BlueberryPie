"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const static_pie_list_1 = __importDefault(require("./static-pie-list"));
class App {
    enableCors() {
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            next();
        });
    }
    middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        const router = express_1.default.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World'
            });
        });
        router.get('/pies', (req, res, next) => {
            res.json(static_pie_list_1.default);
        });
        router.get('/pie', (req, res, next) => {
            let randNum = Math.floor((Math.random() * static_pie_list_1.default.length));
            res.json(static_pie_list_1.default[randNum]);
        });
        this.express.use('/', router);
    }
    constructor() {
        this.express = express_1.default();
        this.enableCors();
        this.middleware();
        this.routes();
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map