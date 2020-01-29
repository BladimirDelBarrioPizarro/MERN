import { SHOW_FORM_PROJECT,
        GET_PROJECTS,
        SET_PROJECT,
        GET_CURRENT_PROJECT,
        DELETE_PROJECT } from '../../types/types';

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
        case GET_CURRENT_PROJECT:
             return {
                 ...state,
                 currentProject: state.projects.filter(item => item.id === action.payload.id)
             }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(item => item.id !== action.payload),
                currentProject:null
            }         
        default:
            return state;
    }
}