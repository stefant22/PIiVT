import { Request, Response, NextFunction } from "express";
import BaseController from "../../common/BaseController";
import IServices from "../../common/IServices.interface";
import DayService from "./service";

class ProgramTypeController extends BaseController{


    public async getAll(req: Request, res: Response, next: NextFunction){
        
        const programTypes =await this.services.programTypeService.getAll();
        res.send(programTypes);
        
    }


}
export default ProgramTypeController;