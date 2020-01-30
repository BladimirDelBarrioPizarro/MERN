import { 
        GET_TASKS_BY_PROJECTID,
        SET_TASK_BY_PROJECT } from '../../types/types';

export default (state,action) => {
    switch(action.type){
        case GET_TASKS_BY_PROJECTID:
            return{
                ...state,
                tasksProject:state.tasks.filter(item => item.projectId === action.payload)
            }
        case SET_TASK_BY_PROJECT:
            return {
                ...state,
                tasks:[...state.tasks,action.payload],
                tasksProject:[...state.tasksProject,action.payload]
            }    
        default:
            return state;
    }
}