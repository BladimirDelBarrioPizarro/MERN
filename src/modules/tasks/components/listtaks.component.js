import React,{ Fragment,useContext,useState } from 'react';
import Taks from './taks.component';
import ProjectContext from '../../context/projects/projectContext';
import TasksContext from '../../context/tasks/tasksContext';

const ListsTasks = () => {

    const projectContext = useContext(ProjectContext);  
    const {currentProject,handleDeleteProject} =  projectContext;

    const tasksContext = useContext(TasksContext);
    const { tasks } = tasksContext;

   
    
    if(!currentProject){
        return <h2>Selecciona un proyecto</h2>
    }
   
    const {name,id} = currentProject[0];
   
    return(
       
       <Fragment> 
            <h2>Proyecto: {name} </h2>
            <ul>
                {tasks.length === 0?<li className="tarea"><p>No hay tareas</p></li>:''}
                {tasks.filter(item => item.projectId === id).map(item =>  <li className="tarea"><Taks task={item}></Taks></li>)} 
            </ul>
        
        <button type="button" className="btn btn-danger" onClick={() => handleDeleteProject(id)}>Eliminar Proyecto &times;</button>    
       </Fragment> 
    )
}

export default ListsTasks;