import BaseService from "../../../services/BaseService";
import IErrorResponse from "../../common/IErrorResponse.interface";
import IModelAdapterOptions from "../../common/IModelAdapterOptions.interface";
import CategoryModel from "../category/model";
import DayModel from "../day/model";
import ProgramTypeModel from "../programType/model";
import ProgramModel from "./model";

class ProgramModelAdapterOptions implements IModelAdapterOptions{
    loadCategory: boolean=false;
    loadDay: boolean=false;
    loadProgramType: boolean=false;


}

export default class ProgramService extends BaseService<ProgramModel>{

    protected  async adaptModel(data: any,options: Partial<ProgramModelAdapterOptions>): Promise<ProgramModel> {

        const item: ProgramModel = new ProgramModel();
        item.programId=Number(data?.program_id);
        item.description=data.description;
        item.descriptionShort=data.description_short;
        item.createdAt=data.created_at;
        item.imagePath=data.image_path;
        item.time=data.time;
        item.categoryId=data.category_id;
        item.dayId=data.day_id;
        item.programTypeID=data.program_type_id;
        

        if(options.loadCategory){
            item.category=await this.services.categoryService.getByID(item.categoryId) as CategoryModel;
        }
        if(options.loadDay){
            item.day=await this.services.dayService.getById(item.dayId) as DayModel;
        }

        if(options.loadProgramType){
            item.programType=await this.services.programTypeService.getById(item.programTypeID) as ProgramTypeModel;
        }
    
        return item;
    }





    public async getById(programId: number,options: Partial<ProgramModelAdapterOptions> = {},): Promise<ProgramModel|IErrorResponse|null> {
        return this.getAllByIdFromTable(
            "program",
            programId,
            options,
        );
    }
    
}