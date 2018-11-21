//------Modal Action Creators------

import {SHOW_MODAL, HIDE_MODAL} from "../constants/actionTypes";

export const showModal = (props) =>{
    return {
        type: SHOW_MODAL,
        props
    }
};

export const hideModal = () =>{
    return {
        type: HIDE_MODAL,
    }
};