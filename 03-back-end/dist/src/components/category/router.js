"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
class CategoryRouter {
    setupRoutes(application, resources) {
        const categoryController = new controller_1.default(resources);
        application.get("/category", categoryController.getAll.bind(categoryController));
        application.get("/category/:id", categoryController.getById.bind(categoryController));
        application.post("/category", categoryController.add.bind(categoryController));
        application.put("/category/:id", categoryController.edit.bind(categoryController));
        application.delete("/category/:id", categoryController.deleteByID.bind(categoryController));
    }
}
exports.default = CategoryRouter;
//# sourceMappingURL=router.js.map