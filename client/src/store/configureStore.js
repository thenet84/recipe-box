//------Store Configuration------
import { createStore } from 'redux';
import reducers from '../reducer.js';
import INITIAL_STATE from './initialState'

const loadState = () => {
    try {
      const recipes = localStorage["thenet_recipes"];
      return (typeof recipes !== 'undefined')?
        {
          recipeReducer: JSON.parse(localStorage["thenet_recipes"]),
          modalReducer: {modalIsActive: false}
        }:
        INITIAL_STATE;
    } catch (err) {
      return undefined;
    }
};

const saveState = state => {
    try {
      const recipes = JSON.stringify(state.recipeReducer);
      localStorage.setItem("thenet_recipes", recipes);
    } catch (err) {
      // Ignore errors.
    }
}

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(reducers, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    store.subscribe(()=>{saveState(store.getState())});
    return store;
};

export const store = configureStore();
  