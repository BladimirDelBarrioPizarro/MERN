import React,{ Fragment } from 'react';
import Taks from './taks.component';

const ListsTasks = () => {

    const taks = [
        {name:'Elegir plataforma',state:true},
        {name:'Elegir sistema operativo',state:true},
        {name:'Elegir placa base',state:false},
        {name:'Elegir mouse',state:true},
    ]
    
  

    return(
        
       <Fragment> 
        <h2>Proyecto: Test1</h2>
            <ul>
                {taks.length === 0?<li className="tarea"><p>No hay tareas</p></li>:''}
                {taks.map(item =>  <li className="tarea"><Taks task={item}></Taks></li>)} 
            </ul>
        
        <button type="button" className="btn btn-danger">Eliminar Proyecto &times;</button>    
       </Fragment> 
    )
}

export default ListsTasks;