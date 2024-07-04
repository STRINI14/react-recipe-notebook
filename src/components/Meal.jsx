import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
import { GiHotMeal } from "react-icons/gi";


const Meal=() => {
    const [url,setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem] = useState();
    const [show,setShow] = useState(false);
    const [search,setSearch] = useState("")
    useEffect(()=> {
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setItem(data.meals);
            setShow(true);
        })
    }, [url])

    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe=(evt)=>{
        if(evt.key==="Enter"){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }

    return (
        <>
        <div className="main-page">
            <div className="header">
                <h1>Recipe Notebook <GiHotMeal className="meal-icon"/></h1>
            </div>
            <div className="search-box">
                <input type="search" placeholder="Search for an ingredient or a recipe..." className="search-bar" onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe} />
            </div>
            <div className="container">
                   {
                        show ? <MealItem data={item}/>: "No Items Found"
                   } 
                    
            </div>
            <div className="index">
                <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)} />
            </div>
        </div>
        </>
    )
}

export default Meal;