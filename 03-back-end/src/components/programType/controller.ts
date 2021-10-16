import { Request, Response, NextFunction } from "express";
import BaseController from "../../common/BaseController";
import ProgramTypeService from "./service";
import DayService from "./service";

class ProgramTypeController extends BaseController{

    ///programTypeService:ProgramTypeService;

    public async getAll(req: Request, res: Response, next: NextFunction){
        const days = await this.services.programTypeService.getAll();
        res.send(days);
        
    }


}
export default ProgramTypeController;