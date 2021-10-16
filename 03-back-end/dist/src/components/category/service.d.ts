import CategoryModel from "./model";
import IErrorResponse from "../../common/IErrorResponse.interface";
import { IAddCategory } from "./dto/AddCategory";
import BaseService from "../../../services/BaseService";
import { IEditCategory } from "./dto/EditCategory";
export default class CategoryService extends BaseService<CategoryModel> {
    protected adaptModel(row: any): Promise<CategoryModel>;
    getAll(): Promise<CategoryModel[] | IErrorResponse>;
    getByID(categoryId: number): Promise<CategoryModel | IErrorResponse | null>;
    add(data: IAddCategory): Promise<CategoryModel | IErrorResponse>;
    edit(categoryId: any, data: IEditCategory): Promise<CategoryModel | IErrorResponse | null>;
    delete(categoryId: number): Promise<IErrorResponse>;
}
