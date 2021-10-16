import { IModel } from "../../common/IModel.interface";

class ProgramModel implements IModel{
    programId:number;
    programTypeID:number;
    dayId:number;
    description:string;
    createdAt:Date;
    title:string;
    time:string;
    descriptionShort:string;
    categoryId;
}

export default ProgramModel;