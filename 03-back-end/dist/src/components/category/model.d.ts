import { IModel } from "../../common/IModel.interface";
declare class CategoryModel implements IModel {
    categoryId: number;
    name: string;
    createdAt: Date;
    imagePath: string;
}
export default CategoryModel;
