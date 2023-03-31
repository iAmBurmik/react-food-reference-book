import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealsByCategory } from "../../api/api";
import Preloader from "../Layout/preloader";
import MealList from "../Meals/MealList";

const Category = () => {
    const category = useParams().name;
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getMealsByCategory(category).then(data => {
            setMeals(data.meals)
        });
    }, [category])
    
    return <div>
        {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
    </div>
}

export default Category;