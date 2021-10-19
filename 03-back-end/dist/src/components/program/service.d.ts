import BaseService from "../../../services/BaseService";
import IErrorResponse from "../../common/IErrorResponse.interface";
import IModelAdapterOptions from "../../common/IModelAdapterOptions.interface";
import ProgramModel from "./model";
declare class ProgramModelAdapterOptions implements IModelAdapterOptions {
    loadCategpry: boolean;
    loadDay: boolean;
    loadProgramType: boolean;
}
export default class ProgramService extends BaseService<ProgramModel> {
    protected adaptModel(data: any, options: Partial<ProgramModelAdapterOptions>): Promise<ProgramModel>;
    getByID(programId: number, options?: Partial<IModelAdapterOptions>): Promise<ProgramModel | IErrorResponse | null>;
}
export {};
