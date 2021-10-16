import { IModel } from "../../common/IModel.interface";

 class ProgramTypeModel implements IModel{

    programTypeId:number;
    name:string;
    createdAt:Date;
  

}

export default ProgramTypeModel;