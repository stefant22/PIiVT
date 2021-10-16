"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAddDayValidator = void 0;
const ajv_1 = require("ajv");
const ajv = new ajv_1.default();
const IAddDayValidator = ajv.compile({
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 2,
            maxLength: 128,
        },
    },
    required: [
        "name"
    ]
});
exports.IAddDayValidator = IAddDayValidator;
//# sourceMappingURL=addDay.js.map