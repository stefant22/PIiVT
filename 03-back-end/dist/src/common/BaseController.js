"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseController {
    constructor(resources) {
        this.resources = resources;
    }
    get services() {
        return this.resources.services;
    }
}
exports.default = BaseController;
//# sourceMappingURL=BaseController.js.map