import React,{ useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Login = () => {
    
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   let validator = require("email-validator");   
   

   const handleOnchangeEmail = (e) => {
        setEmail(e.target.value)
   }

   const handleOnchangePassword = (e) => {
        setPassword(e.target.value)
   }

   const handleOnSubmit = (e) => {
    e.preventDefault();
       const user = {
        email,
        password
       }
       console.log(validator.validate(email));
       if(!validator.validate(email)){
        Swal.fire('Email not valid')
        setEmail('')
       }
       console.log(user)
   }

    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sessión</h1>

                <form onSubmit={handleOnSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                         <input type="email" id="email" placeholder="Your email" onChange={e => handleOnchangeEmail(e)} value={email}>
                         </input>
                    </div>
                    <div className="campo-form">
                         <label htmlFor="password">Password</label>
                         <input type="password" id="password" placeholder="password" onChange={e => handleOnchangePassword(e)} value={password}>
                         </input>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sessión"></input>
                    </div>
                </form>
                <div>
                    <Link to="/newuser" className="account-link">New User</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;