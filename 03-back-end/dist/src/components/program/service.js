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
class ProgramModelAdapterOptions {
    constructor() {
        this.loadCategpry = false;
        this.loadDay = false;
        this.loadProgramType = false;
    }
}
class ProgramService extends BaseService_1.default {
    adaptModel(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = new model_1.default();
            item.programId = Number(data === null || data === void 0 ? void 0 : data.program_id);
            item.description = data.description;
            item.descriptionShort = data.description_short;
            item.createdAt = data.created_at;
            item.imagePath = data.image_path;
            item.time = data.time;
            item.categoryId = data.category_id;
            item.dayId = data.day_id;
            item.programTypeID = data.program_type_id;
            if (options.loadCategpry) {
                item.category = (yield this.services.categoryService.getByID(item.categoryId));
            }
            return item;
        });
    }
    getByID(programId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllByIdFromTable("program", programId, options);
        });
    }
}
exports.default = ProgramService;
//# sourceMappingURL=service.js.map