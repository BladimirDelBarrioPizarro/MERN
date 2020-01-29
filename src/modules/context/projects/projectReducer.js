import { SHOW_FORM_PROJECT,GET_PROJECTS,SET_PROJECT } from '../../types/types';

export default (state,action) => {
    switch(action.type){
        case SHOW_FORM_PROJECT:
            return {
                ...state,
                newProject:true
            }
        case GET_PROJECTS:
            return{
               ...state,
               projects:action.payload 
            }
        case SET_PROJECT:
              return {
                 ...state,
                 projects:[...state.projects,action.payload],
                 newProject:false
            }
        default:
            return state;
    }
}