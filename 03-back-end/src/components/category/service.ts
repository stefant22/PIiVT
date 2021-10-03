import CategoryModel from "./model";

export default class CategoryService{

    public async getAll():Promise<CategoryModel[]>{
        const lista:CategoryModel[]=[];
        lista.push({
            categoryId:1,
            name:"ok"
        })

        lista.push({
            categoryId:2,
            name:"ok2"
        })
        return lista;
    }

    public async getByID(categoryId: number): Promise<CategoryModel|null>{
        if (categoryId===1||categoryId===2){
            if(categoryId===1){
                return{
                    categoryId:1,
                    name:"ok"
                };
            }
            if(categoryId===2){
                return{
                    categoryId:2,
                    name:"ok2"
                };
            }
        }else{
            return null;
        }
    }
}