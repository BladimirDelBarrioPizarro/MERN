import { GET_TASKS_BY_PROJECTID } from '../../types/types';

export default (state,action) => {
    switch(action.type){
        case GET_TASKS_BY_PROJECTID:
            return{
                ...state,
                tasksProject:state.tasks.filter(item => item.projectId === action.payload)
            }
        default:
            return state;
    }
}