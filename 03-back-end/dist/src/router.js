"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Router {
    static setupRoutes(application, resources, routers) {
        for (const router of routers) {
            router.setupRoutes(application, resources);
        }
    }
}
exports.default = Router;
//# sourceMappingURL=router.js.map