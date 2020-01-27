import React from 'react';
import Newproject from './newproject.component';

const Sidebar = () => {
    return(
       
            <aside>
                <h1>MERN<span>Tasks</span></h1>

                
                <Newproject></Newproject>

                <div className="projects">
                    <h2>Tus proyectos</h2>
                </div>
            </aside>
       
    );
}

export default Sidebar;