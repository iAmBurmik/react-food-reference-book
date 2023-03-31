import React from "react";
import CategoryMeal from "./CategoryMeal";
import styles from "./CategoryList.module.css";

const CategoryList = (props) => {
    return <div className={styles.grid}>
        {props.meals.map(meal => {
            return <CategoryMeal key={meal.idCategory} {...meal}/>
        })}
    </div>
}

export default CategoryList;