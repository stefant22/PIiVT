import BaseController from "../../common/BaseController";
import { Request, Response, NextFunction } from "express";
export default class ProgramController extends BaseController {
    getById(req: Request, res: Response, next: NextFunction): Promise<void>;
}
