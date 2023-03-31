import React from "react";
import Footer from "./components/Layout/footer";
import Header from "./components/Layout/header";
import Home from "./components/Pages/home";
import Category from "./components/Pages/Category";
import MealInfo from "./components/Pages/MealInfo";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>  
    {/* basename="/react-food" - чтобы при загрузке на хостинг все хорошо работало, /react-food - последнее название по ссылке */}
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/category/:name" element={<Category/>}/>
          <Route path="/info/:id" element={<MealInfo/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
