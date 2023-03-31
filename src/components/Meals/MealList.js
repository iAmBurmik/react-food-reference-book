import Meal from "./Meal";
import styles from "./MealList.module.css"

const MealList = (props) => {
    return <div className={styles.grid}>
         {props.meals.map(meal => <Meal key={meal.idMeal} {...meal}/>)}
    </div>
}

export default MealList;