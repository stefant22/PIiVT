import CategoryModel from "./model";
export default class CategoryService {
    getAll(): Promise<CategoryModel[]>;
}
