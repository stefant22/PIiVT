import { IModel } from "../src/common/IModel.interface";
import * as mysql2 from "mysql2/promise"
import IErrorResponse from "../src/common/IErrorResponse.interface";
import IApplicationResources from "../src/common/IApplicationResources.interface";
import IServices from "../src/common/IServices.interface";
import IModelAdapterOptions from "../src/common/IModelAdapterOptions.interface";

export default abstract class BaseService<ReturnModel extends IModel>{
    private resources :  IApplicationResources;


    constructor(resources : IApplicationResources) {
        this.resources= resources;
    }

    protected get db(): mysql2.Connection {
        return this.resources.databaseConnection;
    }

    protected get services():IServices{
        return this.resources.services;
    }

    protected abstract adaptModel(data: any, options: Partial<IModelAdapterOptions>,): Promise<ReturnModel>;

    protected async getAllfromTable<AdapterOptions extends IModelAdapterOptions>(tableName: string,options: Partial<AdapterOptions> = { },): Promise<ReturnModel[] | IErrorResponse> {
        
        try {
            const lista: ReturnModel[] = [];
            

            const sql = `SELECT * FROM ${tableName};`;
            const [rows, columns] = await this.db.execute(sql);

            if (Array.isArray(rows)) {
                for (const row of rows) {

                    lista.push(await this.adaptModel(row,options))
                }
            }

            return lista;
        } catch (error) {
            return {
                errorCode: error?.errno,
                errorMessage: error?.sqlMessage
            }
        }
    }



    protected async getAllByIdFromTable<AdapterOptions extends IModelAdapterOptions>(tableName:string,id:number,options: Partial<AdapterOptions> = { },):Promise <ReturnModel|null|IErrorResponse>{
        try {

           const sql:string = `SELECT * FROM ${tableName} where ${tableName}_id=?;`;
            const [rows, columns] = await this.db.execute(sql, [id]);

            if (!Array.isArray(rows)) {
                return null;
            }
            if (rows.length === 0) {
                return null;
            }
            return await this.adaptModel(rows[0],options)
        } catch (error) {
            return {
                errorCode: error?.errno,
                errorMessage: error?.sqlMessage
            }
        }



    }

    protected async getAllByFieldNameFromTable<AdapterOptions extends IModelAdapterOptions>(tableName:string,fieldName:string,fieldValue:any,options: Partial<AdapterOptions> = { },): Promise<ReturnModel[] | IErrorResponse>{
        try {
            const lista: ReturnModel[] = [];

            const sql = `SELECT * FROM ${tableName} WHERE ${fieldName}=?;`;
            const [rows, columns] = await this.db.execute(sql,[fieldValue]);

            if (Array.isArray(rows)) {
                for (const row of rows) {

                    lista.push(await this.adaptModel(row,options))
                }
            }

            return lista;
        } catch (error) {
            return {
                errorCode: error?.errno,
                errorMessage: error?.sqlMessage
            }
        }

    }


}