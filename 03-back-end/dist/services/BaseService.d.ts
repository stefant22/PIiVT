import { IModel } from "../src/common/IModel.interface";
import * as mysql2 from "mysql2/promise";
import IErrorResponse from "../src/common/IErrorResponse.interface";
import IApplicationResources from "../src/common/IApplicationResources.interface";
import IServices from "../src/common/IServices.interface";
export default abstract class BaseService<ReturnModel extends IModel> {
    private resources;
    constructor(resources: IApplicationResources);
    protected get db(): mysql2.Connection;
    protected get services(): IServices;
    protected abstract adaptModel(data: any): Promise<ReturnModel>;
    protected getAllfromTable<AdapterOptions extends ImageBitmapOptions>(tableName: string): Promise<ReturnModel[] | IErrorResponse>;
    protected getAllByIdFromTable<AdapterOptions extends ImageBitmapOptions>(tableName: string, id: number): Promise<ReturnModel | null | IErrorResponse>;
    protected getAllByFieldNameFromTable<AdapterOptions extends ImageBitmapOptions>(tableName: string, fieldName: string, fieldValue: any): Promise<ReturnModel[] | IErrorResponse>;
}
