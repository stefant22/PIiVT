"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
class ProgramTypeRouter {
    setupRoutes(application, resources) {
        const programTypeController = new controller_1.default(resources);
        application.get("/program_types", programTypeController.getAll.bind(controller_1.default));
    }
}
exports.default = ProgramTypeRouter;
//# sourceMappingURL=router.js.map