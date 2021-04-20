import {Apero} from "@/assets/data/Apero"
import {Starter} from "@/assets/data/Starter";
import {MainCourse} from "@/assets/data/MainCourse";
import {Dessert} from "@/assets/data/Dessert";

export class MoocService {

    static getAllWeeks = () => [Apero, Starter, MainCourse, Dessert];

    static getWeekById = (number) => {
        console.log('searching for week number : ', number)
        console.log(this.getAllWeeks().find(w => w.number = number))
        return this.getAllWeeks().find(week => week.number = number)
    };

    static getRecipeByWeekAndId = (week, recipe_rank) => {
        return this.getWeekById(week).recipes.find(recipe => recipe.rank = recipe_rank)
    }
}
