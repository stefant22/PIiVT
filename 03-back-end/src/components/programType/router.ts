import * as express  from "express";
import IApplicationResources from "../../common/IApplicationResources.interface";
import IRouter from "../../common/IRouter.interface"
import ProgramTypeController from "./controller";


export default class ProgramTypeRouter implements IRouter {
    public  setupRoutes(application: express.Application,resources:IApplicationResources){

    
    const programTypeController : ProgramTypeController= new ProgramTypeController(resources);

    

    application.get("/program_types",programTypeController.getAll.bind(ProgramTypeController));
  

}
}