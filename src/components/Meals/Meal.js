import { Link } from "react-router-dom";
import styles from "./Meal.module.css";

const Meal = (props) => {
    return <div >
        <div className={styles["blog-card"]}>
    <img className={styles.img} src={props.strMealThumb} alt="meal-img"></img>
    <div className={styles["title-content"]}>
      <div className={styles.wrapper}>
      <h3>{props.strMeal}</h3>
      </div>
      <hr />
      <Link to={`/info/${props.idMeal}`} className={styles.button}>Дивитись більше</Link>
    </div>
    <div className={styles["gradient-overlay"]}></div>
    <div className={styles["color-overlay"]}></div>
  </div>
    </div>
}

export default Meal;