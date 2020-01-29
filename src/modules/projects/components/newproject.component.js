import React, { Fragment,useState,useContext } from 'react';
import Swal from 'sweetalert2';
import ProjectContext from '../../context/projects/projectContext';
import uuid from 'uuid';

const NewProject = () => {

 const projectContext = useContext(ProjectContext);  
 const {newProject,handleShowFormNewProject,setProject} =  projectContext;
 const [project,saveProject] = useState({id:'',name:''});


 const handleProject = (e) => {
   project.id = uuid.v4()
   project.name = e.target.value
   saveProject(project);
 }

 const handleSubmit = (e) => {
    e.preventDefault(); 
    if(project.name === ''){
        Swal.fire('The project name cannot be empty!')
    }
    else{
      console.log(project)
      setProject(project)
      saveProject({})
    } 
 }

  return (   
   <Fragment>
   <input type="submit" className="btn btn-primario btn-block" value="Nuevo Proyecto" onClick={() => handleShowFormNewProject()}></input>
    {newProject?
    <form className="new-project-form">
        <input type="text" className="input-text" placeholder="Nombre proyecto" onChange={e => handleProject(e)}></input>
        <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto" onClick={e => handleSubmit(e)}></input>
    </form>
    :''} 
    </Fragment>
 )}

 

export default NewProject;