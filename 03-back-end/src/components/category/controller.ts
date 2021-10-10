import CategoryService from "./service";
import { Request, Response, NextFunction, response } from "express";
import CategoryModel from "./model";
import IErrorResponse from "../../common/IErrorResponse.interface";
import { IAddCategory, IAddCategoryValidator } from "./dto/AddCategory";
import { IEditCategory, IEditCategoryValidator } from "./dto/EditCategory";
class CategoryController {
    private categoryService: CategoryService;

    constructor(categoryService: CategoryService) {
        this.categoryService = categoryService;
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        const categories = await this.categoryService.getAll();
        res.send(categories);
    }


    async getById(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        const caregoryId: number = +id;

        if (caregoryId <= 0) {
            res.sendStatus(400);
            return;
        }
        const data: CategoryModel | null | IErrorResponse = await this.categoryService.getByID(caregoryId);

        if (data === null) {
            res.sendStatus(404);
            return;
        }

        if (data instanceof CategoryModel) {
            res.send(data);
            return;
        }

        res.status(500).send(data)
    }

    async add(req: Request, res: Response, next: NextFunction) {
        const data = req.body;
        if (!IAddCategoryValidator(data)) {
            res.status(400).send(IAddCategoryValidator.errors);
            return;
        }


        const result: CategoryModel | IErrorResponse = await this.categoryService.add(data as IAddCategory);
        res.send(result)
    }

    async edit(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        const categoryId: number = +id;

        if (categoryId <= 0) {
            res.sendStatus(400);
            return;
        }
        const data = req.body;
        if (!IEditCategoryValidator(data)) {
            res.status(400).send(IAddCategoryValidator.errors);
            return;
        }
       

        const result: CategoryModel | IErrorResponse = await this.categoryService.edit(categoryId, data as IEditCategory);
        res.send(result)



    }


    async deleteByID(req: Request, res: Response, next: NextFunction){
        const id: string = req.params.id;
        const categoryId: number = +id;

        if (categoryId <= 0) {
            res.sendStatus(400);
            return;
        }

        res.send(await this.categoryService.delete(categoryId));

    }


}
export default CategoryController;