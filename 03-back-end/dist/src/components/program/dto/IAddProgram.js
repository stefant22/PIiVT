"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAddProgramValidator = void 0;
const ajv_1 = require("ajv");
const ajv = new ajv_1.default();
const IAddProgramValidator = ajv.compile({
    type: "object",
    properties: {
        description: {
            type: "string",
            minLength: 2,
            maxLength: 64 * 1024,
        },
        title: {
            type: "string",
            maxLength: 128,
        },
        imagePath: {
            type: "string",
            maxLength: 128,
        },
        descriptionShort: {
            type: "string",
            maxLength: 64 * 1024,
        },
        time: {
            type: "string",
            maxLength: 255,
        },
        categoryId: {
            type: "number",
            maxLength: 255,
        },
        programTypeID: {
            type: "number",
            maxLength: 255,
        },
        dayId: {
            type: "number",
            maxLength: 255,
        },
    },
    required: [
        "programTypeID", "dayId", "categoryId", "title"
    ]
});
exports.IAddProgramValidator = IAddProgramValidator;
//# sourceMappingURL=IAddProgram.js.map