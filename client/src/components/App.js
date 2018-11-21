import React from "react";
import RecipeBox from './RecipeBox';
import Modal from './Modal';
import AddEditRecipe from './AddEditRecipe';

const App = (props) => {
    const modalTitle = (props.modalProps)?'Edit recipe':'Add a recipe';
    return (
        <div>
          <header>
              <h1>RECIPE BOX</h1>
          </header>
          <RecipeBox recipes={props.recipes} 
              editRecipe={props.editRecipe} 
              deleteRecipe={props.deleteRecipe}
              openModal={props.openModal} />
          <br />
          <button onClick={()=>props.openModal()}>Add new recipe</button>
          {props.modalIsActive && (
              <Modal closeModal={props.closeModal} title={modalTitle}>
              <AddEditRecipe 
                  addRecipe={props.addRecipe} 
                  editRecipe={props.editRecipe} 
                  closeModal={props.closeModal} 
                  modalProps={props.modalProps} />
              </Modal>
          )}
        </div>
    );
}

export default App