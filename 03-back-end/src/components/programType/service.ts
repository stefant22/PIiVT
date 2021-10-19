import BaseService from "../../../services/BaseService";
import IErrorResponse from "../../common/IErrorResponse.interface";
import IModelAdapterOptions from "../../common/IModelAdapterOptions.interface";
import ProgramTypeModel from "./model";
import DayModel from "./model";


class ProgramTypeModelAdapterOptions implements IModelAdapterOptions{

}
class ProgramTypeService extends BaseService<ProgramTypeModel>{


    protected async adaptModel(data: any): Promise<ProgramTypeModel> {
        const item: DayModel=new DayModel();
        item.ProgramTypeId=+(data?.program_type_id);
        item.name= data.name;
        item.createdAt=data.created_at;
        return item;
    }

    public async  getAll():Promise<DayModel[]| IErrorResponse >{

        return await this.getAllfromTable<ProgramTypeModelAdapterOptions>("program_type");

    }
    
    public async getById(programTypeId: number,options: Partial<ProgramTypeModelAdapterOptions> = {},): Promise<ProgramTypeModel|IErrorResponse|null> {
        return this.getAllByIdFromTable(
            "program_type",
            programTypeId,
          
        );
    }
    


}

export default ProgramTypeService;