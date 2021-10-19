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
    public async getById(req: Request, res: Response, next: NextFunction){
        const id: string = req.params.id;
        const programTypeId: number = +id;
        const programType = await this.services.programTypeService.getById(programTypeId);
        res.send(programType);
        
    }

}
export default ProgramTypeController;