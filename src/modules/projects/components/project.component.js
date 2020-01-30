import React,{useContext} from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TasksContext from '../../context/tasks/tasksContext';

const Project = (project) => {

    const projectContext = useContext(ProjectContext);  
    const { handleCurrentProject } =  projectContext;

    const tasksContext = useContext(TasksContext);
    const { handleGetTasksByProjectId  } = tasksContext;

    const handleProject = project => {
        handleCurrentProject(project);
        handleGetTasksByProjectId(project.id);
    }

    return(
            <li>
                <input type="button" className="noEdge" value={project.project.name} onClick={() => handleProject(project.project)}></input>
            </li>
    );
}
export default Project;


