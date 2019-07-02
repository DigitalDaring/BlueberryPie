import * as path from "path";
import express from "express";
import * as bodyParser from "body-parser";
import staticPies from './static-pie-list';

class App {

    express: express.Application;

    private enableCors(): void {
        this.express.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            next();
        });
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    private routes(): void {
        const router = express.Router();

        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World'
            });
        });

        router.get('/pies', (req, res, next) => {
            res.json(staticPies);
        });

        router.get('/pie', (req, res, next) => {
            let randNum = Math.floor((Math.random() * staticPies.length));
            res.json(staticPies[randNum]);
        });

        this.express.use('/', router);
    }

    constructor() {
        this.express = express();
        this.enableCors();
        this.middleware();
        this.routes();
    }
}

export default new App().express;