//------Recipe Reducer------
import {ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE} from "../constants/actionTypes";

const recipeReducer = (state = [], action) => {
    switch (action.type){
      case ADD_RECIPE:
        return [...state, action.recipe];
        
      case DELETE_RECIPE:
        return [...state.slice(0, action.index),
                ...state.slice(action.index + 1)];
        
      case EDIT_RECIPE:
        let newState = [...state];
        newState[action.index] = action.recipe;
        return newState;
        
      default:
        return state;
    }
}

export default recipeReducer