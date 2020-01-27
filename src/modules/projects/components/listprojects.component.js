import React from 'react';
import Project from './project.component';

const ListProjects = () => {

        const projects = [
            {name:'Test 1'},
            {name:'Test 2'},
            {name:'Test 3'},
            {name:'Test 4'}
        ];
    return(
       
            <ul className="list-projects">
               {projects.map(item => (<Project project={item}></Project>))}
            </ul>
            
    );
}

export default ListProjects;