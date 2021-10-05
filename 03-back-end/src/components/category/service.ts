import CategoryModel from "./model";
import * as mysql2 from "mysql2/promise";

export default class CategoryService{
    private db:mysql2.Connection
    
constructor (db: mysql2.Connection){
    this.db=db;
}


protected async adaptdModel(row:any):Promise<CategoryModel>{
    const item:CategoryModel=new CategoryModel();

    item.categoryId=Number(row?.category_id);
    item.name=row?.name;
    item.createdAt=row?.created_at;
    return item;
}


    public async getAll():Promise<CategoryModel[]>{
        const lista:CategoryModel[]=[];
       const sql="SELECT * FROM category";
       const [ rows, columns ] = await this.db.execute(sql);

        if(Array.isArray(rows)){
            for(const row of rows){

               lista.push( await this.adaptdModel(row))
            }
        }

        return lista;
    }

    public async getByID(categoryId: number): Promise<CategoryModel|null>{
       const sql= "SELECT * FROM category where category_id=?;";
       const [ rows, columns ] = await this.db.execute(sql,[categoryId]);
       if(!Array.isArray(rows)){
           return null;
       }
       if(rows.length===0){
           return null;
       }
       return await this.adaptdModel(rows[0])

    }
}