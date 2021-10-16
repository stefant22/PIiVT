import BaseService from "../../../services/BaseService";
import IErrorResponse from "../../common/IErrorResponse.interface";
import IModelAdapterOptions from "../../common/IModelAdapterOptions.interface";
import DayModel from "./model";


class DayModelAdapterOptions implements IModelAdapterOptions{

}
class DayService extends BaseService<DayModel>{


    protected async adaptModel(data: any): Promise<DayModel> {
        const item: DayModel=new DayModel();
        item.dayId=+(data?.day_id);
        item.name= data.name;
        return item;
    }

    public async  getAll():Promise<DayModel[]| IErrorResponse >{

        return await this.getAllfromTable<DayModelAdapterOptions>("day");

    }
    
    


}

export default DayService;