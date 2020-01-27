import React from 'react';

const Project = (project) => {
    console.log(project)
    return(
            <li>
                <input type="text" className="noEdge" value={project.project.name}></input>
            </li>
    );
}
export default Project;