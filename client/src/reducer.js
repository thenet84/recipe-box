import { combineReducers } from 'redux';
import recipeReducer from './reducers/recipeReducer';
import modalReducer from './reducers/modalReducer';

const reducers = combineReducers({recipeReducer: recipeReducer, modalReducer: modalReducer});

export default reducers