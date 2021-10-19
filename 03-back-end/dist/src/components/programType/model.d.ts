import { IModel } from "../../common/IModel.interface";
declare class ProgramTypeModel implements IModel {
    ProgramTypeId: number;
    name: string;
    createdAt: Date;
}
export default ProgramTypeModel;
