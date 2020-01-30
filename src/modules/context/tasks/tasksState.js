import React, { useReducer} from 'react';
import TasksContext from './tasksContext';
import TasksReducer from './tasksReducer';

const TasksState = props => {

   const initialState = {
      tasks:[]
   }

   //Dispath para ejecutar acciones
   const[state,dispatch] = useReducer(TasksReducer,initialState)

   //Funciones CRUD

   
   return (
       <TasksContext.Provider value={{
           
       }}>
           {props.children}
       </TasksContext.Provider>
   )
}

export default TasksState;
