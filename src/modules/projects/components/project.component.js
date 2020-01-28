import React from 'react';

const Project = (project) => {
    return(
            <li>
                <input type="button" className="noEdge" value={project.project.name}></input>
            </li>
    );
}
export default Project;