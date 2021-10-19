import { Request, Response, NextFunction } from "express";
import BaseController from "../../common/BaseController";
import DayService from "./service";

class DayController extends BaseController{



    public async getAll(req: Request, res: Response, next: NextFunction){
        const days = await this.services.dayService.getAll();
        res.send(days);
        
    }


    public async getById(req: Request, res: Response, next: NextFunction){
        const id: string = req.params.id;
        const dayId: number = +id;
        const days = await this.services.dayService.getById(dayId);
        res.send(days);
        
    }


}
export default DayController;