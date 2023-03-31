import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api/api";
import Preloader from "../Layout/preloader";
import Search from "../Layout/Search";
import CategoryList from "../Meals/CategoryList";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    const [meals, setMeals] = useState([]);
    const {pathname, search} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        getAllCategories().then(data => {
            setMeals(
                search ? data.categories.filter(meal => meal.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())) : data.categories
            );
        }); 
    }, [search]);

    const handleSearch = (str) => {
        setMeals((prevMeals) => {
            return prevMeals.filter(meal => meal.strCategory.toLowerCase().includes(str.toLowerCase()))
        });
        navigate({pathname, search:`?search=${str}`});
    }

    return <div>
        <Search inputValue={handleSearch}/>
        {!meals.length ? <Preloader/> : <CategoryList meals={meals}/>}
        {/* <Preloader/> */}
    </div>
}

export default Home;