"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const dev_1 = require("./config/dev");
const service_1 = require("./components/category/service");
const controller_1 = require("./components/category/controller");
const application = express();
application.use(cors());
application.use(express.json());
application.use(dev_1.default.server.static.route, express.static(dev_1.default.server.static.path, {
    index: dev_1.default.server.static.index,
    cacheControl: dev_1.default.server.static.cacheControl,
    maxAge: dev_1.default.server.static.maxAge,
    dotfiles: dev_1.default.server.static.dotfiles
}));
const categoryService = new service_1.default();
const categoryController = new controller_1.default(categoryService);
application.get("/categroy", categoryController.getAll.bind(categoryController));
application.use((req, res) => {
    res.sendStatus(404);
});
application.listen(dev_1.default.server.port = 40080);
//# sourceMappingURL=main.js.map