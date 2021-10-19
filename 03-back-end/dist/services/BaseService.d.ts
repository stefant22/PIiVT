import { IModel } from "../src/common/IModel.interface";
import * as mysql2 from "mysql2/promise";
import IErrorResponse from "../src/common/IErrorResponse.interface";
import IApplicationResources from "../src/common/IApplicationResources.interface";
import IServices from "../src/common/IServices.interface";
import IModelAdapterOptions from "../src/common/IModelAdapterOptions.interface";
export default abstract class BaseService<ReturnModel extends IModel> {
    private resources;
    constructor(resources: IApplicationResources);
    protected get db(): mysql2.Connection;
    protected get services(): IServices;
    protected abstract adaptModel(data: any, options: Partial<IModelAdapterOptions>): Promise<ReturnModel>;
    protected getAllfromTable<AdapterOptions extends IModelAdapterOptions>(tableName: string, options?: Partial<AdapterOptions>): Promise<ReturnModel[] | IErrorResponse>;
    protected getAllByIdFromTable<AdapterOptions extends IModelAdapterOptions>(tableName: string, id: number, options?: Partial<AdapterOptions>): Promise<ReturnModel | null | IErrorResponse>;
    protected getAllByFieldNameFromTable<AdapterOptions extends IModelAdapterOptions>(tableName: string, fieldName: string, fieldValue: any, options?: Partial<AdapterOptions>): Promise<ReturnModel[] | IErrorResponse>;
}
