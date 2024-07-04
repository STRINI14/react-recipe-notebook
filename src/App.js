import React from "react";
import Meal from "./components/Meal";
import './components/Styles.css';
import {Routes, Route} from "react-router-dom"
import RecipeInfo from "./components/RecipeInfo";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/:MealId" element={<RecipeInfo/>} />
    </Routes>
    
    </>
  );
}

export default App;
