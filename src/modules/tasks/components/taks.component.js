import React from 'react';


const Taks = (task) => {

    return (
        <li className="tarea sombra">
                <p>{task.task.name}</p>
            <div>
                {task.task.state?
                    <button type="button" className="btn btn-success">Completo</button>
                :
                    <button type="button" className="btn btn-warning">Incompleto</button>
                }
            </div>
            <div className="acciones">
               <button type="button" className="btn btn-primario">Editar</button>
               <button type="button" className="btn btn-danger">Eliminar</button>         
            </div>
        </li>    
    )
}

export default Taks;