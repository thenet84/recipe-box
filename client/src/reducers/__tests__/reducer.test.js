import recipeReducer from '../recipeReducer';
import {
  ADD_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE
} from "../../constants/actionTypes";


describe('Recipe Reducers', () => {
  const recipe = {
    name: 'Pizza',
    ingredients: ['cheese', 'tomato']
  };

  it('Should add recipe to state', () => {
    expect(recipeReducer([], { type: ADD_RECIPE, recipe })).toEqual([recipe]);
  });

  it('Should delete recipe from state', () => {
    const recipes = [recipe, recipe];

    expect(recipeReducer(recipes, { type: DELETE_RECIPE, index: 1 })).toEqual([recipe]);

    expect(recipeReducer(recipes, { type: DELETE_RECIPE, index: 10 })).toEqual(recipes);
  });
})