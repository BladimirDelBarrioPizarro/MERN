import React, { useReducer} from 'react';
import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';
import { SHOW_FORM_PROJECT,
         GET_PROJECTS,
         SET_PROJECT } from '../../types/types';
import uuid from 'uuid';



const ProjectState = props => {

     const projects = [
        {id:uuid.v4(),name:'Test 1'},
        {id:uuid.v4(),name:'Test 2'},
        {id:uuid.v4(),name:'Test 3'},
        {id:uuid.v4(),name:'Test 4'},
        {id:uuid.v4(),name:'MERN'}
    ] 

    const initialState = {
        newProject:false,
        projects : []
    }

    //Dispath para ejecutar acciones
    const[state,dispatch] = useReducer(ProjectReducer,initialState)

    //Funciones CRUD

    const handleShowFormNewProject = () => {
        dispatch({
            type:SHOW_FORM_PROJECT
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload:projects
        })
    }

    const setProject = project => {
        dispatch({
            type: SET_PROJECT,
            payload: project
        })
    }

    


    return (
        <ProjectContext.Provider value={{
            newProject:state.newProject,
            projects:state.projects,
            handleShowFormNewProject,
            getProjects,
            setProject
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;
