import React from "react";
import IngredientsList from './IngredientsList';
import RecipeButtons from './RecipeButtons';

const Recipe = (props) => {
    const index = props.index;
    if(props.recipe.ingredients.length === 0) return null;
    return (
        <div className="tab">
        <input id={"tab-"+index} type="checkbox"/>
        <label htmlFor={"tab-"+index}>{props.recipe.name}</label>
        <div className="tab-content">
            <IngredientsList ingredients={props.recipe.ingredients} />
            <RecipeButtons deleteRecipe={props.deleteRecipe} openModal={props.openModal} recipe={props.recipe} index={index}/>
        </div>
        </div>
    );
}

export default Recipe 