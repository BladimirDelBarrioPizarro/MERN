import React from 'react';
import Newproject from './newproject.component';
import ListProjects from './listprojects.component';

const Sidebar = () => {
    return(
       
            <aside>
                <h1>MERN<span>Tasks</span></h1>
                <Newproject></Newproject>
                <div className="projects">
                    <ListProjects></ListProjects>
                </div>
            </aside>
       
    );
}

export default Sidebar;