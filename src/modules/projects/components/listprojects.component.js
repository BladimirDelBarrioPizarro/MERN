import React,{ useContext,useEffect } from 'react';
import Project from './project.component';
import ProjectContext from '../../context/projects/projectContext';

const ListProjects = () => {
   
    const projectContext = useContext(ProjectContext); 
    const  { projects,getProjects } = projectContext;

    useEffect(() => {
        getProjects()
    },[]) 

    if(projects.length === 0){return <p>No hay proyectos. Crea uno!!</p>;}

    return(
            <ul className="list-projects">
               {projects.map(item => (<Project key={item.id} project={item}></Project>))}
            </ul>
            
    );
}

export default ListProjects;