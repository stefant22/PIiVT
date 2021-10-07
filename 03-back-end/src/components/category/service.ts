import CategoryModel from "./model";
import * as mysql2 from "mysql2/promise";
import IErrorResponse from "../../common/IErrorResponse.interface";
import { IAddCategory } from "./dto/AddCategory";
import BaseService from "../../../services/BaseService";
import { IEditCategory } from "./dto/EditCategory";
import IModelAdapterOptions from "../../common/IModelAdapterOptions.interface";

class CategoryModelAdapterOptions implements IModelAdapterOptions{

}

export default class CategoryService extends BaseService<CategoryModel> {
 

    protected async adaptModel(row: any): Promise<CategoryModel> {
        const item: CategoryModel = new CategoryModel();

        item.categoryId = Number(row?.category_id);
        item.name = row?.name;
        item.createdAt = row?.created_at;
        item.imagePath = row?.image_path;
        return item;
    }


    public async getAll(): Promise<CategoryModel[] | IErrorResponse> {

        return await this.getAllfromTable<CategoryModelAdapterOptions>("category");
    }

    public async getByID(categoryId: number): Promise<CategoryModel | IErrorResponse | null> {
        return await this.getAllByIdFromTable<CategoryModelAdapterOptions>("category",categoryId);


    }


    public async add(data: IAddCategory): Promise<CategoryModel | IErrorResponse> {
        try {
            const sql = "INSERT category SET name=?, image_path=?";
            const insertData = await this.db.execute(sql, [data.name, data.imagePath]);
            const insertInfo: any = insertData[0];
            const newCategoryId: number = +(insertInfo?.insertId);


            return await this.getByID(newCategoryId);

        } catch (error) {
            return {
                errorCode: error?.errno,
                errorMessage: error?.sqlMessage
            }

        }
    }

    public async edit(categoryId,data:IEditCategory):Promise<CategoryModel|IErrorResponse|null>{
        const result = await this.getByID(categoryId);

        if (result===null){
            return null;
        }

        if (result instanceof CategoryModel){

            try {
                const sql = `UPDATE category SET name=?, image_path=? WHERE category_id=?;`;
                const insertData = await this.db.execute(sql, [data.name, data.imagePath,categoryId]);
                
    
                return await this.getByID(categoryId);
    
            } catch (error) {
                console.log("error: ",error);
                return {
                    errorCode: error?.errno,
                    errorMessage: error?.sqlMessage
                }
    
            }
        }
          
        }

    }




