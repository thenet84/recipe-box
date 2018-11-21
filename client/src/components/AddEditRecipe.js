import React from "react";

class AddEditRecipe extends React.Component{
    constructor(props){
      super(props);
      let modalProps = props.modalProps || {
        recipe: {
          ingredients: [], 
          name: '',
        },
        recipeIndex : undefined
      };
      this.state = {
        ingredients: modalProps.recipe.ingredients.join(','), 
        name: modalProps.recipe.name,
        index: modalProps.recipeIndex
      };  
    }
    
    handleInputChange(event) {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      });
    }
    
    submitRecipe(){
      if(this.state.index !== undefined){
        this.props.editRecipe({
          name: this.state.name,
          ingredients: this.state.ingredients.split(',')
        }, this.state.index);
      } else if(this.state.name && this.state.ingredients){
        this.props.addRecipe({
          name: this.state.name,
          ingredients: this.state.ingredients.split(',')
        });
      }
      this.setState({name:'', ingredients:''});
      this.props.closeModal();
    }
    
    render(){
      return (
        <div>
          <div className="add-edit-recipe">
            <label htmlFor="name">Name</label> 
            <input id="name" name="name" value={this.state.name}
              onChange={(e)=>this.handleInputChange(e)}/><br />
            <label htmlFor="ingredients">Ingredients</label>
            <textarea id="ingredients" name="ingredients" value={this.state.ingredients}
              onChange={(e)=>this.handleInputChange(e)}/>
            <span className="info">*Enter ingredients separated by commas</span>
            <div className="add-edit-buttons">
              <button onClick={()=>this.submitRecipe()}>{this.state.index === undefined?'Add':'Edit'} recipe</button>
              <button onClick={()=>this.props.closeModal()}>Close</button>
            </div>
          </div>
        </div>
      );
    }
}

export default AddEditRecipe