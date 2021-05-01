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

    getRecipeByWeekAndIndex = (week, recipe) => {
        const target_week = this.getWeekById(week);
        return  target_week.recipes[recipe]
    }
}

export default new MoocService;
