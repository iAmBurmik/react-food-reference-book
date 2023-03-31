import API_URL from "../config";

const getMealById = async (mealId) => {
    let response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
}

const getAllCategories = async () => {
    let response = await fetch(API_URL + 'categories.php'); // mode: 'no-cors' - чтобы через некоторое время не выдавало ошибку
    return await response.json();
}

const getMealsByCategory = async (category) => {
    let response = await fetch(API_URL + 'filter.php?c=' + category);
    return await response.json();
}

export {getMealById, getAllCategories, getMealsByCategory};