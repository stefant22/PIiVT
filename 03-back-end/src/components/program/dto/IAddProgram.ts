import Ajv from "ajv";

interface IAddProgram {

    description:string;
    createdAt:Date;
    title:string;
    time:string;
    descriptionShort:string;
    imagePath:string;
    categoryId:number;
    programTypeID:number;
    dayId:number;
   
}






const ajv = new Ajv();


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

})

export { IAddProgram };
export { IAddProgramValidator };