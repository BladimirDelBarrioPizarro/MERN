import React from 'react';
import Sidebar from './sidebar.component';
import Header from '../../header/components/header.component';
const Projects = () => {
    return(
        <div className="container-app">
             
           
           <Sidebar></Sidebar>

            <div className="seccion-principal">
                <Header></Header>
                <main>
                    <div className="container-tasks" >
                       Tus Proyectos
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Projects;