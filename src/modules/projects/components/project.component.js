import React,{useContext} from 'react';
import ProjectContext from '../../context/projects/projectContext';

const Project = (project) => {

    const projectContext = useContext(ProjectContext);  
    const {handleCurrentProject} =  projectContext;

    return(
            <li>
                <input type="button" className="noEdge" value={project.project.name} onClick={() => handleCurrentProject(project.project)}></input>
            </li>
    );
}
export default Project;