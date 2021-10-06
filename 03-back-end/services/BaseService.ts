import { IModel } from "../src/common/IModel.interface";
import * as mysql2 from "mysql2/promise"
import IErrorResponse from "../src/common/IErrorResponse.interface";

export default abstract class BaseService<ReturnModel extends IModel>{
    private dbConnection: mysql2.Connection;

    constructor(db: mysql2.Connection) {
        this.dbConnection = db;
    }

    protected get db(): mysql2.Connection {
        return this.dbConnection;
    }

    protected abstract adaptModel(data: any): Promise<ReturnModel>;

    protected async getAllfromTable(tableName: string): Promise<ReturnModel[] | IErrorResponse> {
        try {
            const lista: ReturnModel[] = [];

            const sql = `SELECT * FROM ${tableName};`;
            const [rows, columns] = await this.db.execute(sql);

            if (Array.isArray(rows)) {
                for (const row of rows) {

                    lista.push(await this.adaptModel(row))
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



    protected async getAllByIdFromTable(tableName:string,id:number):Promise <ReturnModel|null|IErrorResponse>{
        try {

           const sql:string = `SELECT * FROM ${tableName} where ${tableName}_id=?;`;
            const [rows, columns] = await this.db.execute(sql, [id]);

            if (!Array.isArray(rows)) {
                return null;
            }
            if (rows.length === 0) {
                return null;
            }
            return await this.adaptModel(rows[0])
        } catch (error) {
            return {
                errorCode: error?.errno,
                errorMessage: error?.sqlMessage
            }
        }



    }

    protected async getAllByFieldNameFromTable(tableName:string,fieldName:string,fieldValue:any): Promise<ReturnModel[] | IErrorResponse>{
        try {
            const lista: ReturnModel[] = [];

            const sql = `SELECT * FROM ${tableName} WHERE ${fieldName}=?;`;
            const [rows, columns] = await this.db.execute(sql,[fieldValue]);

            if (Array.isArray(rows)) {
                for (const row of rows) {

                    lista.push(await this.adaptModel(row))
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