import IApplicationResources from "./IApplicationResources.interface";
import IServices from "./IServices.interface";
export default abstract class BaseController {
    private resources;
    constructor(resources: IApplicationResources);
    protected get services(): IServices;
}
