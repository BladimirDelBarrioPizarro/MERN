import React from 'react';
import Sidebar from './sidebar.component';

const Projects = () => {
    return(
        <div className="container-app">
             
           
           <Sidebar></Sidebar>

            <div className="seccion-principal">
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