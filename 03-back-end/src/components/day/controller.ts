import { Request, Response, NextFunction } from "express";
import BaseController from "../../common/BaseController";
import DayService from "./service";

class DayController extends BaseController{



    public async getAll(req: Request, res: Response, next: NextFunction){
        const days = await this.services.dayService.getAll();
        res.send(days);
        
    }


}
export default DayController;