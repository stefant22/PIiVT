import BaseService from "../../../services/BaseService";
import IErrorResponse from "../../common/IErrorResponse.interface";
import DayModel from "./model";
declare class DayService extends BaseService<DayModel> {
    protected adaptModel(data: any): Promise<DayModel>;
    getAll(): Promise<DayModel[] | IErrorResponse>;
}
export default DayService;
