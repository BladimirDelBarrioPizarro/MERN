import React, { useReducer} from 'react';
import TasksContext from './tasksContext';
import TasksReducer from './tasksReducer';
import uuid from 'uuid';
import { 
         GET_TASKS_BY_PROJECTID,
         SET_TASK_BY_PROJECT } from '../../types/types';

const TasksState = props => {

   const tasks = [
    {id:uuid.v4(),projectId:1,name:'Elegir plataforma',state:true},
    {id:uuid.v4(),projectId:2,name:'Elegir sistema operativo',state:true},
    {id:uuid.v4(),projectId:3,name:'Elegir placa base',state:false},
    {id:uuid.v4(),projectId:4,name:'Elegir mouse',state:true},
    {id:uuid.v4(),projectId:5,name:'Elegir pantalla',state:true},
    {id:uuid.v4(),projectId:1,name:'Elegir plataforma 2',state:true},
    {id:uuid.v4(),projectId:2,name:'Elegir sistema operativo 2',state:true},
    {id:uuid.v4(),projectId:3,name:'Elegir placa base 2',state:false},
    {id:uuid.v4(),projectId:4,name:'Elegir mouse 2',state:true},
    {id:uuid.v4(),projectId:5,name:'Elegir pantalla 2',state:true},
   ]  

   const initialState = {
      tasks:[
        {id:uuid.v4(),projectId:1,name:'Elegir plataforma',state:true},
        {id:uuid.v4(),projectId:2,name:'Elegir sistema operativo',state:true},
        {id:uuid.v4(),projectId:3,name:'Elegir placa base',state:false},
        {id:uuid.v4(),projectId:4,name:'Elegir mouse',state:true},
        {id:uuid.v4(),projectId:5,name:'Elegir pantalla',state:true},
        {id:uuid.v4(),projectId:1,name:'Elegir plataforma 2',state:true},
        {id:uuid.v4(),projectId:2,name:'Elegir sistema operativo 2',state:true},
        {id:uuid.v4(),projectId:3,name:'Elegir placa base 2',state:false},
        {id:uuid.v4(),projectId:4,name:'Elegir mouse 2',state:true},
        {id:uuid.v4(),projectId:5,name:'Elegir pantalla 2',state:true},
      ],
      tasksProject:[]
   }

   //Dispath para ejecutar acciones
   const[state,dispatch] = useReducer(TasksReducer,initialState)

   //Funciones CRUD
   const handleGetTasksByProjectId = proyectId => {
    dispatch({
        type:GET_TASKS_BY_PROJECTID,
        payload:proyectId
    })
   }

   const handleSetTaskByProject = task => {
    dispatch({
        type:SET_TASK_BY_PROJECT,
        payload:task
    }) 
   }


   
   return (
       <TasksContext.Provider value={{
           tasks:state.tasks,
           tasksProject:state.tasksProject,
           handleGetTasksByProjectId,
           handleSetTaskByProject
       }}>
           {props.children}
       </TasksContext.Provider>
   )
}

export default TasksState;
