import * as express from "express";
import IApplicationResources from "../../common/IApplicationResources.interface";
import IRouter from "../../common/IRouter.interface";
export default class CategoryRouter implements IRouter {
    setupRoutes(application: express.Application, resources: IApplicationResources): void;
}
