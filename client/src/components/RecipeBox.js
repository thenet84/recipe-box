import React from "react";
import Recipe from './Recipe';

const RecipeBox = (props) => {
    const recipes = props.recipes.map((recipe,i) =>{
      return <Recipe key={i} recipe={recipe} index={i}
                openModal={props.openModal} 
                editRecipe={props.editRecipe} 
                deleteRecipe={props.deleteRecipe}  />;
    })
    if(props.recipes.length === 0) return null;
    return (
      <div className="recipe-box">
        {recipes}  
      </div>
    );
}

export default RecipeBox