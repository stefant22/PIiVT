import CategoryService from "./service";
import{Request, Response, NextFunction} from "express";
import CategoryModel from "./model";
import IErrorResponse from "../../common/IErrorResponse.interface";
class CategoryController{
private categoryService: CategoryService;

constructor(categoryService: CategoryService){
    this.categoryService= categoryService;
}

async getAll(req: Request, res: Response, next: NextFunction){
    const categories = await this.categoryService.getAll();
    res.send(categories);
}


async getById(req: Request, res: Response, next: NextFunction){
    const id:string = req.params.id;
    const caregoryId: number=+id;

    if(caregoryId<=0){
        res.sendStatus(400);
    }
    const data :CategoryModel|null|IErrorResponse = await this.categoryService.getByID(caregoryId);

    if(data===null){
        res.sendStatus(404);
        return;
    }

    if(data instanceof CategoryModel){
    res.send(data);
    return;
}

res.status(500).send(data)
}


}
export default CategoryController;