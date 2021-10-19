import BaseController from "../../common/BaseController";
import { Request, Response, NextFunction, response } from "express";
import CategoryModel from "./model";
import IErrorResponse from "../../common/IErrorResponse.interface";
import ProgramService from "./service";

export default class ProgramController extends BaseController{


 


    async getById(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        const programId: number = +id;

        if (programId <= 0) {
            res.sendStatus(400);
            return;
        }
        const data: CategoryModel | null | IErrorResponse = await this.services.programService.getById(programId, { loadCategory: true,loadDay:true,loadProgramType:true});

        if (data === null) {
            res.sendStatus(404);
            return;
        }

        if (data instanceof CategoryModel) {
            res.send(data);
            return;
        }

        res.status(500).send(data)
    }


}