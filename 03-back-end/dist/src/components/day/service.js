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
const BaseService_1 = require("../../../services/BaseService");
const model_1 = require("./model");
class DayModelAdapterOptions {
}
class DayService extends BaseService_1.default {
    adaptModel(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = new model_1.default();
            item.dayId = +(data === null || data === void 0 ? void 0 : data.day_id);
            item.name = data.name;
            return item;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getAllfromTable("day");
        });
    }
}
exports.default = DayService;
//# sourceMappingURL=service.js.map