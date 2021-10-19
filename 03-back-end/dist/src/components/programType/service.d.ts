import BaseService from "../../../services/BaseService";
import IErrorResponse from "../../common/IErrorResponse.interface";
import ProgramTypeModel from "./model";
import DayModel from "./model";
declare class ProgramTypeService extends BaseService<ProgramTypeModel> {
    protected adaptModel(data: any): Promise<ProgramTypeModel>;
    getAll(): Promise<DayModel[] | IErrorResponse>;
}
export default ProgramTypeService;
