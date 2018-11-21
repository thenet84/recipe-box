//------Modal Reducer------
import {SHOW_MODAL, HIDE_MODAL} from "../constants/actionTypes";

const modalReducer = (state = {modalIsActive: false}, action) => {
    switch(action.type){
        case SHOW_MODAL:
            return {...state, modalIsActive: true, props : action.props};
        case HIDE_MODAL:
            return {...state, modalIsActive: false}
        default:
            return state;
    }
}

export default modalReducer