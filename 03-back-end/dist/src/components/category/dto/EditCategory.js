"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEditCategoryValidator = void 0;
const ajv_1 = require("ajv");
const ajv = new ajv_1.default();
const IEditCategoryValidator = ajv.compile({
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 2,
            maxLength: 128,
        },
        imagePath: {
            type: "string",
            maxLength: 255,
            pattern: "\.(png|jpg|jpeg)$"
        },
    },
    required: [
        "name", "imagePath"
    ]
});
exports.IEditCategoryValidator = IEditCategoryValidator;
//# sourceMappingURL=EditCategory.js.map