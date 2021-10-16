"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
class DayRouter {
    setupRoutes(application, resources) {
        const dayController = new controller_1.default(resources);
        application.get("/days", dayController.getAll.bind(dayController));
    }
}
exports.default = DayRouter;
//# sourceMappingURL=router.js.map