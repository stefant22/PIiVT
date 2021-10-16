"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const dev_1 = require("./config/dev");
const router_1 = require("./components/category/router");
const mysql2 = require("mysql2/promise");
const router_2 = require("./router");
const router_3 = require("./components/day/router");
const service_1 = require("./components/category/service");
const service_2 = require("./components/day/service");
const service_3 = require("./components/programType/service");
const router_4 = require("./components/programType/router");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const application = express();
        application.use(cors());
        application.use(express.json());
        const resources = {
            databaseConnection: yield mysql2.createConnection({
                host: dev_1.default.database.host,
                port: dev_1.default.database.port,
                user: dev_1.default.database.user,
                password: dev_1.default.database.password,
                database: dev_1.default.database.databse,
                charset: dev_1.default.database.charset,
                timezone: dev_1.default.database.timezone,
                supportBigNumbers: true,
            })
        };
        resources.services = {
            categoryService: new service_1.default(resources),
            dayService: new service_2.default(resources),
            programTypeService: new service_3.default(resources),
        };
        resources.databaseConnection.connect();
        application.use(dev_1.default.server.static.route, express.static(dev_1.default.server.static.path, {
            index: dev_1.default.server.static.index,
            cacheControl: dev_1.default.server.static.cacheControl,
            maxAge: dev_1.default.server.static.maxAge,
            dotfiles: dev_1.default.server.static.dotfiles,
            etag: dev_1.default.server.static.etag
        }));
        router_2.default.setupRoutes(application, resources, [
            new router_1.default(),
            new router_3.default(),
            new router_4.default(),
        ]);
        application.use((req, res) => {
            res.sendStatus(404);
        });
        application.listen(dev_1.default.server.port = 40080);
    });
}
main();
//# sourceMappingURL=main.js.map