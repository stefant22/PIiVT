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
const BaseService_1 = require("../../../services/BaseService");
class CategoryModelAdapterOptions {
}
class CategoryService extends BaseService_1.default {
    adaptModel(row) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = new model_1.default();
            item.categoryId = Number(row === null || row === void 0 ? void 0 : row.category_id);
            item.name = row === null || row === void 0 ? void 0 : row.name;
            item.createdAt = row === null || row === void 0 ? void 0 : row.created_at;
            item.imagePath = row === null || row === void 0 ? void 0 : row.image_path;
            return item;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getAllfromTable("category");
        });
    }
    getByID(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getAllByIdFromTable("category", categoryId);
        });
    }
    add(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "INSERT category SET name=?, image_path=?";
                const insertData = yield this.db.execute(sql, [data.name, data.imagePath]);
                const insertInfo = insertData[0];
                const newCategoryId = +(insertInfo === null || insertInfo === void 0 ? void 0 : insertInfo.insertId);
                return yield this.getByID(newCategoryId);
            }
            catch (error) {
                return {
                    errorCode: error === null || error === void 0 ? void 0 : error.errno,
                    errorMessage: error === null || error === void 0 ? void 0 : error.sqlMessage
                };
            }
        });
    }
    edit(categoryId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getByID(categoryId);
            if (result === null) {
                return null;
            }
            if (result instanceof model_1.default) {
                try {
                    const sql = `UPDATE category SET name=?, image_path=? WHERE category_id=?;`;
                    const insertData = yield this.db.execute(sql, [data.name, data.imagePath, categoryId]);
                    return yield this.getByID(categoryId);
                }
                catch (error) {
                    console.log("error: ", error);
                    return {
                        errorCode: error === null || error === void 0 ? void 0 : error.errno,
                        errorMessage: error === null || error === void 0 ? void 0 : error.sqlMessage
                    };
                }
            }
        });
    }
    delete(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `DELETE FROM category WHERE category_id=?;`;
                const deletedData = yield this.db.execute(sql, [categoryId]);
                const deletedinfo = deletedData[0];
                const deletedRowCount = +(deletedinfo.affectedRows);
                if (deletedRowCount === 1) {
                    return ({
                        errorCode: 0,
                        errorMessage: "record deleted"
                    });
                }
                else {
                    return ({
                        errorCode: -1,
                        errorMessage: "This record could not be deleted"
                    });
                }
            }
            catch (error) {
                console.log("error: ", error);
                return {
                    errorCode: error === null || error === void 0 ? void 0 : error.errno,
                    errorMessage: error === null || error === void 0 ? void 0 : error.sqlMessage
                };
            }
        });
    }
}
exports.default = CategoryService;
//# sourceMappingURL=service.js.map