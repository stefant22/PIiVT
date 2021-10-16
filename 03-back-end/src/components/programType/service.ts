import BaseService from "../../../services/BaseService";
import IErrorResponse from "../../common/IErrorResponse.interface";
import IModelAdapterOptions from "../../common/IModelAdapterOptions.interface";
import ProgramTypeModel from "./model";



class ProgramTypeAdapterOptions implements IModelAdapterOptions{

}
class ProgramTypeService extends BaseService<ProgramTypeModel>{


    protected async adaptModel(data: any): Promise<ProgramTypeModel> {
        const item: ProgramTypeModel=new ProgramTypeModel();
        item.programTypeId=+(data?.program_type_id);
        item.name= data.name;
        item.createdAt=data.created_at;
        return item;
    }

    public async  getAll():Promise<ProgramTypeModel[]| IErrorResponse >{

        return await this.getAllfromTable<ProgramTypeAdapterOptions>("program_type");

    }
    
    


}

export default ProgramTypeService;