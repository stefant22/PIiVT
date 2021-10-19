import CategoryService from "../components/category/service";
import DayService from "../components/day/service";
import ProgramService from "../components/program/service";
import ProgramTypeService from "../components/programType/service";


export default interface IServices{
    categoryService: CategoryService;
    dayService: DayService;
    programTypeService:ProgramTypeService;
    programService:ProgramService;

}