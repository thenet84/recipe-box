//------Recipe Action Creators------
import {ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE} from "../constants/actionTypes";

export const addRecipe = (recipe) => {
    return {
        type: ADD_RECIPE,
        recipe
    }
};

export const deleteRecipe = (index) => {
    return {
        type: DELETE_RECIPE,
        index
    }
};

export const editRecipe = (recipe, index) => {
    return {
        type: EDIT_RECIPE,
        index,
        recipe
    }
};
  