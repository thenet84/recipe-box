import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect }  from 'react-redux';
import './styles/style.css';
import App from './components/App';
import * as recipeActions from './actions/recipeActions';
import * as modalActions from './actions/modalActions';
import { store } from './store/configureStore';
import * as serviceWorker from './serviceWorker';

const mapStateToProps = (state) => {
    return {
      recipes : state.recipeReducer,
      modalIsActive: state.modalReducer.modalIsActive,
      modalProps: state.modalReducer.props
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        addRecipe : (recipe) => {
            return dispatch(recipeActions.addRecipe(recipe));
        },
        deleteRecipe : (index) => {
            return dispatch(recipeActions.deleteRecipe(index));
        },
        editRecipe : (recipe, index) => {
            return dispatch(recipeActions.editRecipe(recipe, index));
        },
        openModal: (props) =>{
            return dispatch(modalActions.showModal(props));
        },
        closeModal: () =>{
            return dispatch(modalActions.hideModal());
        }
    }
}
  
const Container = connect(mapStateToProps, mapDispatchToProps)(App);
  
class AppWrapper extends React.Component{
    render(){
        return (
        <Provider store={store}>
            <Container />
        </Provider>
        )
    }
}
  
ReactDOM.render(<AppWrapper />, document.getElementById('root'));

serviceWorker.unregister();