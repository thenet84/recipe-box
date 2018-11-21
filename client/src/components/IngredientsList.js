import React from "react";

const IngredientsList = (props) => {
    const ingredients = props.ingredients.map( (ing,i) =>{
      return <li key={i}>{ing}</li>;
    });  
    return (
      <div className="ingredients">
        <h4>Ingredients</h4>
        <hr />
        <ul>{ingredients}</ul>
      </div>
    );
}

export default IngredientsList