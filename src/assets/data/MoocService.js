import {Apero} from "@/assets/data/Apero"
import {Starter} from "@/assets/data/Starter";
import {MainCourse} from "@/assets/data/MainCourse";
import {Dessert} from "@/assets/data/Dessert";


class MoocService {

    getAllWeeks = () => [Apero, Starter, MainCourse, Dessert];

    getWeekById = (number) => {
        switch (number) {
            case 1:
                return Apero;
            case 2:
                return Starter;
            case 3:
                return MainCourse;
            case 4:
                return Dessert;
        }
    };

    getRecipeByWeekAndId = (week, recipe_rank) => {
        return this.getWeekById(week).recipes.find(recipe => recipe.rank = recipe_rank)
    }
}

export default new MoocService;
