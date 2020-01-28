import React from 'react';

const FormTasks = () => {
    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input type="text" className="input-text" placeholder="Nombre tarea">
                    </input>
                </div>
                <div className="contenedor-input">
                    <input type="submit" className="btn btn-primario btn-submit btn-block" value="Agregar Tarea">
                    </input>
                </div>
            </form>
        </div>
    )
}

export default FormTasks;