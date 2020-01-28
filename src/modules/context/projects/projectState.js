import React, { useReducer } from 'react';
import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';


const ProjectState = props => {
    const initialState = {
        newProject:false
    }

    //Dispath para ejecutar acciones
    const[state,dispatch] = useReducer(ProjectReducer,initialState)

    //Funciones CRUD

    return (
        <ProjectContext.Provider value={{
            newProject:state.newProject
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;
