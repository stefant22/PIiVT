import * as express  from "express";
import CategoryService from "./service";
import CategoryController from "./controller";
import IApplicationResources from "../../common/IApplicationResources.interface";
import IRouter from "../../common/IRouter.interface"
import DayService from "./service";
import DayController from "./controller";


export default class DayRouter implements IRouter {
    public  setupRoutes(application: express.Application,resources:IApplicationResources){

    
    const dayController : DayController= new DayController(resources);

    

    application.get("/days",dayController.getAll.bind(dayController));
  

}
}