import React from 'react';

const Login = () => {
    
   const handleOnchange = () => {

   }

    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sessión</h1>

                <form>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                         <input type="email" id="email" placeholder="Your email" onChange={handleOnchange}>
                         </input>
                    </div>
                    <div className="campo-form">
                         <label htmlFor="password">Password</label>
                         <input type="password" id="password" placeholder="password" onChange={handleOnchange}>
                         </input>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sessión"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;