import React, { useReducer} from 'react';
import ProjectContext from './projectContext';
import ProjectReducer from './projectReducer';
import { SHOW_FORM_PROJECT,
         GET_PROJECTS,
         SET_PROJECT,
         GET_CURRENT_PROJECT,
         DELETE_PROJECT } from '../../types/types';
import uuid from 'uuid';



const ProjectState = props => {

     const projects = [
        {id:1,name:'Test 1'},
        {id:2,name:'Test 2'},
        {id:3,name:'Test 3'},
        {id:4,name:'Test 4'},
        {id:5,name:'Test 5'}
    ] 

    const initialState = {
        newProject:false,
        projects : [],
        currentProject:null
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

    const handleCurrentProject = project => {
        dispatch({
            type: GET_CURRENT_PROJECT,
            payload: project
        })
    }

    const handleDeleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload:projectId
        })
    }

    return (
        <ProjectContext.Provider value={{
            newProject:state.newProject,
            projects:state.projects,
            currentProject:state.currentProject,
            handleShowFormNewProject,
            getProjects,
            setProject,
            handleCurrentProject,
            handleDeleteProject
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;
