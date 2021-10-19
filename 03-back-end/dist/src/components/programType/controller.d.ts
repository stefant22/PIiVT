import { Request, Response, NextFunction } from "express";
import BaseController from "../../common/BaseController";
declare class ProgramTypeController extends BaseController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export default ProgramTypeController;
