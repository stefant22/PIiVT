"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IEditDayValidator = void 0;
const ajv_1 = require("ajv");
const ajv = new ajv_1.default();
const IEditDayValidator = ajv.compile({
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 2,
            maxLength: 128,
        }
    },
    required: [
        "name", "imagePath"
    ]
});
exports.IEditDayValidator = IEditDayValidator;
//# sourceMappingURL=editDay.js.map