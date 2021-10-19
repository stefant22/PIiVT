import { IModel } from "../../common/IModel.interface";
import CategoryModel from "../category/model";
import DayModel from "../day/model";
import ProgramTypeModel from "../programType/model";

class ProgramModel implements IModel{
    programId:number;
    description:string;
    createdAt:Date;
    title:string;
    time:string;
    descriptionShort:string;
    imagePath:string;

    categoryId:number;
    category?:CategoryModel;

    programTypeID:number;
    programType?:ProgramTypeModel;

    dayId:number;
    day?:DayModel;
}

export default ProgramModel;