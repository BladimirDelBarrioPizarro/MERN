import React, { Fragment } from 'react';

const NewProject = () => {
  return (   
   <Fragment>
   <input type="submit" className="btn btn-primario btn-block" value="Nuevo Proyecto"></input>

    <form className="new-project-form">
        <input type="text" className="input-text" placeholder="Nombre proyecto"></input>
        <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto"></input>
    </form> 
    </Fragment>
 )}

export default NewProject;