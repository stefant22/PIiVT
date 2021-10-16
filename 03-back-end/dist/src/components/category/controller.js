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
const model_1 = require("./model");
const AddCategory_1 = require("./dto/AddCategory");
const EditCategory_1 = require("./dto/EditCategory");
const BaseController_1 = require("../../common/BaseController");
class CategoryController extends BaseController_1.default {
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield this.services.categoryService.getAll();
            res.send(categories);
        });
    }
    getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const caregoryId = +id;
            if (caregoryId <= 0) {
                res.sendStatus(400);
                return;
            }
            const data = yield this.services.categoryService.getByID(caregoryId);
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
    add(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            if (!(0, AddCategory_1.IAddCategoryValidator)(data)) {
                res.status(400).send(AddCategory_1.IAddCategoryValidator.errors);
                return;
            }
            const result = yield this.services.categoryService.add(data);
            res.send(result);
        });
    }
    edit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const categoryId = +id;
            if (categoryId <= 0) {
                res.sendStatus(400);
                return;
            }
            const data = req.body;
            if (!(0, EditCategory_1.IEditCategoryValidator)(data)) {
                res.status(400).send(AddCategory_1.IAddCategoryValidator.errors);
                return;
            }
            const result = yield this.services.categoryService.edit(categoryId, data);
            res.send(result);
        });
    }
    deleteByID(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const categoryId = +id;
            if (categoryId <= 0) {
                res.sendStatus(400);
                return;
            }
            res.send(yield this.services.categoryService.delete(categoryId));
        });
    }
}
exports.default = CategoryController;
//# sourceMappingURL=controller.js.map