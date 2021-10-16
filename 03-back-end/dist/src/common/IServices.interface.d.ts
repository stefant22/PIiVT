import CategoryService from "../components/category/service";
import DayService from "../components/day/service";
import ProgramTypeService from "../components/programType/service";
export default interface IServices {
    categoryService: CategoryService;
    dayService: DayService;
    programTypeService: ProgramTypeService;
}
