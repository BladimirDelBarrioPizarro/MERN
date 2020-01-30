import React,{ useContext, useState, useRef  } from 'react';
import TasksContext from '../../context/tasks/tasksContext';
import ProjectContext from '../../context/projects/projectContext';
import uuid from 'uuid';
import Swal from 'sweetalert2';

const FormTasks = () => {

    const tasksContext = useContext(TasksContext);
    const { handleSetTaskByProject } = tasksContext;

    const projectContext = useContext(ProjectContext);
    const { currentProject } = projectContext; 

    const [task,setTask] = useState({id:uuid.v4(),projectId:null,name:null,state:true})
    const taskName = useRef(null);

    const handleTask = (e) => {
        e.preventDefault();
        console.log(taskName.current.value);
        if(taskName.current.value === ''){
            Swal.fire('The task name cannot be empty!')
        }
        else{
            task.projectId = currentProject[0].id;
            task.name = taskName.current.value;
            setTask(task)
            handleSetTaskByProject(task);
            document.getElementById("taskName").value = '';
        }  
    }

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input type="text" className="input-text" placeholder="Nombre tarea" id="taskName"  ref={taskName}>
                    </input>
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-submit btn-block" value="Agregar Tarea" onClick={(e) => handleTask(e) }>
                    </input>
                </div>
            </form>
        </div>
    )
}

export default FormTasks;

