import React,{ useContext } from 'react';
import Sidebar from './sidebar.component';
import Header from '../../header/components/header.component';
import FormTasks from '../../tasks/components/formtasks.component';
import ListsTasks from '../../tasks/components/listtaks.component';
import ProjectContext from '../../context/projects/projectContext';

const Projects = () => {
   
    const projectContext = useContext(ProjectContext);  
    const { currentProject } =  projectContext;

    return(
        <div className="container-app">
           <Sidebar></Sidebar>
            <div className="seccion-principal">
                <Header></Header>
                <main>
                    {currentProject ? <FormTasks></FormTasks> : null }
                    <div className="container-tasks" >
                       <ListsTasks></ListsTasks>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Projects;