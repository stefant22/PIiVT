import { Request, Response, NextFunction } from "express";
import BaseController from "../../common/BaseController";
declare class CategoryController extends BaseController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
    getById(req: Request, res: Response, next: NextFunction): Promise<void>;
    add(req: Request, res: Response, next: NextFunction): Promise<void>;
    edit(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteByID(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export default CategoryController;
