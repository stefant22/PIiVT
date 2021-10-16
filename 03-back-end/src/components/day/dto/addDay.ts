import Ajv from "ajv";

interface IAddDay {
    name: string;

}

const ajv = new Ajv();


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

})

export { IAddDay };
export { IAddDayValidator };