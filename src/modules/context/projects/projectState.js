import React, { useReducer } from 'react';
import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';
import { SHOW_FORM_PROJECT } from '../../types/types';

const ProjectState = props => {
    const initialState = {
        newProject:false
    }

    //Dispath para ejecutar acciones
    const[state,dispatch] = useReducer(ProjectReducer,initialState)

    //Funciones CRUD

    const handleShowFormNewProject = () => {
        dispatch({
            type:SHOW_FORM_PROJECT
        })
    }

    return (
        <ProjectContext.Provider value={{
            newProject:state.newProject,
            handleShowFormNewProject
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;
