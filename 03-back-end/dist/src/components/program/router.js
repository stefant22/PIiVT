"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
class ProgramRouter {
    setupRoutes(application, resources) {
        const programController = new controller_1.default(resources);
        application.get("/program/:id", programController.getById.bind(programController));
    }
}
exports.default = ProgramRouter;
//# sourceMappingURL=router.js.map