interface IAddProgram {
    description: string;
    createdAt: Date;
    title: string;
    time: string;
    descriptionShort: string;
    imagePath: string;
    categoryId: number;
    programTypeID: number;
    dayId: number;
}
declare const IAddProgramValidator: import("ajv").ValidateFunction<unknown>;
export { IAddProgram };
export { IAddProgramValidator };
