import styles from "./CategoryMeal.module.css"
import { Link } from "react-router-dom";

const CategoryMeal = (props) => {
    return <div className={`${styles["blog-card"]} ${styles["spring-fever"]}`}>
    <img className={styles.img} src={props.strCategoryThumb} alt="meal-img"></img>
    <div className={styles["title-content"]}>
      <div className={styles.wrapper}>
      <Link to={`/category/${props.strCategory}`} className={styles.button}>{props.strCategory}</Link>
      </div>
      <hr />
      <div className={styles.intro}>{props.strCategoryDescription.substring(0, 80) + '... '}</div>
    </div>
    <div className={styles["gradient-overlay"]}></div>
    <div className={styles["color-overlay"]}></div>
  </div>
}

export default CategoryMeal;