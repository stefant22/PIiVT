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
class BaseService {
    constructor(resources) {
        this.resources = resources;
    }
    get db() {
        return this.resources.databaseConnection;
    }
    get services() {
        return this.resources.services;
    }
    getAllfromTable(tableName, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lista = [];
                const sql = `SELECT * FROM ${tableName};`;
                const [rows, columns] = yield this.db.execute(sql);
                if (Array.isArray(rows)) {
                    for (const row of rows) {
                        lista.push(yield this.adaptModel(row, options));
                    }
                }
                return lista;
            }
            catch (error) {
                return {
                    errorCode: error === null || error === void 0 ? void 0 : error.errno,
                    errorMessage: error === null || error === void 0 ? void 0 : error.sqlMessage
                };
            }
        });
    }
    getAllByIdFromTable(tableName, id, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `SELECT * FROM ${tableName} where ${tableName}_id=?;`;
                const [rows, columns] = yield this.db.execute(sql, [id]);
                if (!Array.isArray(rows)) {
                    return null;
                }
                if (rows.length === 0) {
                    return null;
                }
                return yield this.adaptModel(rows[0], options);
            }
            catch (error) {
                return {
                    errorCode: error === null || error === void 0 ? void 0 : error.errno,
                    errorMessage: error === null || error === void 0 ? void 0 : error.sqlMessage
                };
            }
        });
    }
    getAllByFieldNameFromTable(tableName, fieldName, fieldValue, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lista = [];
                const sql = `SELECT * FROM ${tableName} WHERE ${fieldName}=?;`;
                const [rows, columns] = yield this.db.execute(sql, [fieldValue]);
                if (Array.isArray(rows)) {
                    for (const row of rows) {
                        lista.push(yield this.adaptModel(row, options));
                    }
                }
                return lista;
            }
            catch (error) {
                return {
                    errorCode: error === null || error === void 0 ? void 0 : error.errno,
                    errorMessage: error === null || error === void 0 ? void 0 : error.sqlMessage
                };
            }
        });
    }
}
exports.default = BaseService;
//# sourceMappingURL=BaseService.js.map