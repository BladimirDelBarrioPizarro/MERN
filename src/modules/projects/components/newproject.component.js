import React, { Fragment,useState,useContext } from 'react';
import Swal from 'sweetalert2';
import ProjectContext from '../../context/projects/projectContext';

const NewProject = () => {

 const projectContext = useContext(ProjectContext);  
 const {newProject,handleShowFormNewProject} =  projectContext;
 const [open,setOpen] = useState(newProject);   
 const handleClick = () => {
     {!open?
    setOpen(true)
    :setOpen(false)} 
 }

 const [project,setProject] = useState('');


 const handleProject = (e) => {
        setProject(e.target.value);
 }

 const handleSubmit = (e) => {
    e.preventDefault(); 
    if(project === ''){
        Swal.fire('The project name cannot be empty!')
    }
    console.log(project)
 }

  return (   
   <Fragment>
   <input type="submit" className="btn btn-primario btn-block" value="Nuevo Proyecto" onClick={() => handleShowFormNewProject()} onChange={handleClick}></input>
    {newProject?
    <form className="new-project-form">
        <input type="text" className="input-text" placeholder="Nombre proyecto" onChange={e => handleProject(e)}></input>
        <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto" onClick={handleSubmit}></input>
    </form>
    :''} 
    </Fragment>
 )}

 

export default NewProject;