import Ajv from "ajv";

interface IAddCategory {
    name: string;
    imagePath: string;
}

const ajv = new Ajv();


const IAddCategoryValidator = ajv.compile({
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

})

export { IAddCategory };
export { IAddCategoryValidator };