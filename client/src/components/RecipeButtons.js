import React from "react";

class RecipeButtons extends React.Component{ 
    deleteRecipe(){
      this.props.deleteRecipe(this.props.index);
    }
    
    editRecipe(){
      this.props.openModal({recipe: this.props.recipe, recipeIndex: this.props.index});
    }
    
    render(){
      return (
        <div className="recipe-buttons">
         <button onClick={()=>this.deleteRecipe()}>Delete</button>
         <button onClick={()=>this.editRecipe()}>Edit</button>
        </div>
      );
    }
}

export default RecipeButtons