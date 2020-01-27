import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const NewUser = () => {
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repitpassword,setRepitPassword] = useState('');

    const handleOnchangeName = (e) => {
        e.preventDefault();
        setName(e.target.value)
      
    }

    const handleOnchangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value) 
    }

    const handleOnchangePassword1 = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const handleOnchangePassword2 = (e) => {
        e.preventDefault();
        setRepitPassword(e.target.value)
    }
  

    


    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(name===''){
            Swal.fire('Name cannot be empty')
        }
        else{
            let validator = require("email-validator"); 
            if(!validator.validate(email)){
            Swal.fire('Email not valid')
            setEmail('')
            }
            else{
                if(password!==repitpassword){
                    Swal.fire('Passwords have to be the same!!')
                }
                else{
                    const user = {
                        name,
                        email,
                        password,
                    }
                    console.log(user) 
                    handleInsertUser(user);
                }    
            }
        } 
    }

    const handleInsertUser = (user) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: `Quieres guardar al usuario ${user.name}?`,
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, guardarlo!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.value) {
              swalWithBootstrapButtons.fire(
                'Guardado!',
                'Your user has been inserted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your user file is safe :)',
                'error'
              )
            }
          })
    }

    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Create user</h1>

                <form onSubmit={handleOnSubmit}>

                <div className="campo-form">
                        <label htmlFor="name">Nombre</label>
                         <input type="text" id="text" placeholder="Your name" onChange={e => handleOnchangeName(e)} value={name}>
                         </input>
                    </div>


                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                         <input type="email" id="email" placeholder="Your email" onChange={e => handleOnchangeEmail(e)} value={email}>
                         </input>
                    </div>
                    <div className="campo-form">
                         <label htmlFor="password">Password</label>
                         <input type="password" id="password" placeholder="password" onChange={e => handleOnchangePassword1(e)} value={password}>
                         </input>
                    </div>

                    <div className="campo-form">
                         <label htmlFor="repitPassword">Repit Password</label>
                         <input type="password" id="repitPassword" placeholder="password" onChange={e => handleOnchangePassword2(e)} value={repitpassword}>
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

export default NewUser;