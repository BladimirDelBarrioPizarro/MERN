import { SHOW_FORM_PROJECT } from '../../types/types';

export default (state,action) => {
    switch(action.type){
        case SHOW_FORM_PROJECT:
            return {
                ...state,
                newProject:true
            }
        default:
            return state;
    }
}