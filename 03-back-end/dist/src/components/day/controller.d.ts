import { Request, Response, NextFunction } from "express";
import BaseController from "../../common/BaseController";
declare class DayController extends BaseController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export default DayController;
