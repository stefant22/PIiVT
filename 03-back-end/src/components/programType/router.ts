import * as express  from "express";
import CategoryService from "./service";
import CategoryController from "./controller";
import IApplicationResources from "../../common/IApplicationResources.interface";
import IRouter from "../../common/IRouter.interface"
import DayService from "./service";
import DayController from "./controller";
import ProgramTypeController from "./controller";


export default class  ProgramTypeRouter implements IRouter {
    public  setupRoutes(application: express.Application,resources:IApplicationResources){

    
    const  programTypeController :  ProgramTypeController= new  ProgramTypeController(resources);

    

    application.get("/program_types",programTypeController.getAll.bind(programTypeController));
    application.get("/program_type/:id",programTypeController.getById.bind(programTypeController));

}
}