import {
  addRecipe
} from '../recipeActions';
import {
  ADD_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE
} from "../../constants/actionTypes";


describe('Recipe Actions', () => {
  it('Should create an action to add a recipe', () => {
    const recipe = {
      name: 'Pizza',
      ingredients: ['cheese', 'tomato']
    };
    const expectedAction = {
      type: ADD_RECIPE,
      recipe
    };
    expect(addRecipe(recipe)).toEqual(expectedAction);
  });
})