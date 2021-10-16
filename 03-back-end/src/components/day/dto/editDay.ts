import Ajv from "ajv";

interface IEditDay {
    name: string;

}

const ajv = new Ajv();


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

})

export { IEditDay };
export { IEditDayValidator };