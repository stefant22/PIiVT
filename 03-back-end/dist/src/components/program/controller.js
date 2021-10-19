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
const BaseController_1 = require("../../common/BaseController");
const model_1 = require("./model");
class ProgramController extends BaseController_1.default {
    getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const programId = +id;
            if (programId <= 0) {
                res.sendStatus(400);
                return;
            }
            const data = yield this.services.programService.getByID(programId, { loadCategory: true });
            if (data === null) {
                res.sendStatus(404);
                return;
            }
            if (data instanceof model_1.default) {
                res.send(data);
                return;
            }
            res.status(500).send(data);
        });
    }
}
exports.default = ProgramController;
//# sourceMappingURL=controller.js.map