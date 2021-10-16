import { IModel } from "../../common/IModel.interface";
declare class ProgramModel implements IModel {
    programId: number;
    programTypeID: number;
    dayId: number;
    description: string;
    createdAt: Date;
    title: string;
    time: string;
    descriptionShort: string;
    categoryId: any;
}
export default ProgramModel;
