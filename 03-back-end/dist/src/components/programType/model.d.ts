import { IModel } from "../../common/IModel.interface";
declare class ProgramTypeModel implements IModel {
    programTypeId: number;
    name: string;
    createdAt: Date;
}
export default ProgramTypeModel;
