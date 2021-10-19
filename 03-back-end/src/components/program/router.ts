import * as express  from "express";
import CategoryService from "./service";

import IApplicationResources from "../../common/IApplicationResources.interface";
import IRouter from "../../common/IRouter.interface"
import ProgramController from "./controller";


export default class ProgramRouter implements IRouter {
    public  setupRoutes(application: express.Application,resources:IApplicationResources){


    const programController :ProgramController= new ProgramController(resources);

    application.get("/program/:id",programController.getById.bind(programController));

}
}