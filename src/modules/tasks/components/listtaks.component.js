import React,{ Fragment,useContext,useState } from 'react';
import Taks from './taks.component';
import ProjectContext from '../../context/projects/projectContext';

const ListsTasks = () => {

    const projectContext = useContext(ProjectContext);  
    const {currentProject,handleDeleteProject} =  projectContext;
    
    if(!currentProject){
        return <h2>Selecciona un proyecto</h2>
    }
   

    const taks = [
        {name:'Elegir plataforma',state:true},
        {name:'Elegir sistema operativo',state:true},
        {name:'Elegir placa base',state:false},
        {name:'Elegir mouse',state:true},
    ]

    const {name} = currentProject[0];
    
    return(
       
       <Fragment> 
            <h2>Proyecto: {name} </h2>
            <ul>
                {taks.length === 0?<li className="tarea"><p>No hay tareas</p></li>:''}
                {taks.map(item =>  <li className="tarea"><Taks task={item}></Taks></li>)} 
            </ul>
        
        <button type="button" className="btn btn-danger" onClick={() => handleDeleteProject(currentProject[0].id)}>Eliminar Proyecto &times;</button>    
       </Fragment> 
    )
}

export default ListsTasks;