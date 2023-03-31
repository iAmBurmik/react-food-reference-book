import { useParams } from "react-router-dom";
import { getMealById } from "../../api/api";
import { useState, useEffect } from "react";
import Preloader from "../Layout/preloader";
import styles from "./MealInfo.module.css"

const MealInfo = () => {
    const id = useParams().id;
    const [info, setInfo] = useState([]);

    useEffect(() => {
        getMealById(id).then(data => setInfo(data.meals[0]));
    }, [id]);
    
    return <div>
        {!info.idMeal ? <Preloader/> : (
            <div className={styles.infoPage}>
                <img className={styles.mealImg} src={info.strMealThumb} alt={info.strMeal}/>
                <h1>{info.strMeal}</h1>
                <h6>Category: {info.strCategory}</h6>
                {info.strArea ? <h6>Area: {info.strArea}</h6> : null}
                <p>{info.strInstructions}</p>

                <table>
                    <thead>
                        <tr>
                            <th>Ingridient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(info).map(key => {
                            if(key.includes('Ingredient') && info[key]){
                                return <tr key={key}>
                                    <td>{info[key]}</td>
                                    <td>{info[`strMeasure${key.slice(13)}`]}</td>
                                </tr>
                            }
                            return null;
                        })}
                    </tbody>
                </table>

                {info.strYoutube ? (
                    <div>
                        <h5>Video Recipe</h5>
                        <iframe title={id} src={`https://www.youtube.com/embed/${info.strYoutube.slice(-11)}`} allowFullScreen></iframe>
                    </div>
                ) : null}
            </div>)}
    </div>
}

export default MealInfo;