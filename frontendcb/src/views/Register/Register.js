import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const API = process.env.REACT_APP_API;

export const Register = () => {

    const [document, setDocument] = useState({ campo: '', valido: null });
    const [name, setName] = useState({ campo: '', valido: null });
    const [lastname, setLastname] = useState({ campo: '', valido: null });
    const [email, setEmail] = useState({ campo: '', valido: null });
    const [password, setPassword] = useState({ campo: '', valido: null });
    const [password2, setPassword2] = useState({ campo: '', valido: null });

    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const handleSubmit = async (e) => {

        const validacion = () => {

        }
        // const validarPassword = () => {
        //     if (password.campo.length > 0) {
        //         if (password.campo !== password2.campo) {
        //             cambiarPassword2((prevState) => {
        //                 return { ...prevState, valido: 'false' }
        //             });
        //         } else {
        //             cambiarPassword2((prevState) => {
        //                 return { ...prevState, valido: 'true' }
        //             });
        //         }
        //     }
        // }

        const res = await fetch('${API}/Users', {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                document,
                name,
                lastname,
                email,
                password
            })
        })
        await res.json();

    }

    return (
        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
            <div className="container">
                <div className="card login-card">
                    <div className="row no-gutters">
                        <div className="col-md-5" id="LeftImage" >
                            <img alt="login" className="login-card-img" />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <p className="login-card-description">Login</p>
                                <form onSubmit={handleSubmit}>
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="sec1" aria-labelledby="step1-tab" role="tabpanel">
                                            <div className="form-group">
                                                <label for="document" class="sr-only">Documento</label>
                                                <input
                                                    type="text"
                                                    name="document"
                                                    id="document"
                                                    className="form-control"
                                                    placeholder="Documento"
                                                    onChange={(e) => setDocument(e.target.value)}
                                                    expresionRegular={expresiones.nombre}
                                                />
                                            </div>
                                            <div class="form-group">
                                                <label for="document" class="sr-only">Nombre</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    class="form-control"
                                                    placeholder="Nombre"
                                                    onChange={(e) => setDocument(e.target.value)}

                                                />
                                            </div>
                                            <div class="form-group">
                                                <label for="document" class="sr-only">Apellido</label>
                                                <input
                                                    type="text"
                                                    name="lastname"
                                                    id="lastname"
                                                    class="form-control"
                                                    placeholder="Apellido"
                                                    onChange={(e) => setDocument(e.target.value)}

                                                />
                                            </div>
                                            <a href="#sec2" id="step2-tab" data-toggle="tab" role="tab" aria-selected="true" >
                                                <input name="continue" id="continue" className="btn btn-block login-btn mb-4" type="button" value="Continuar ⮕" />
                                            </a>
                                        </div>
                                        <div class="tab-pane fade" id="sec2" aria-labelledby="step2-tab" role="tabpanel">
                                            <div class="form-group">
                                                <label for="document" class="sr-only">email</label>
                                                <input
                                                    type="text"
                                                    name="document"
                                                    id="document"
                                                    class="form-control"
                                                    placeholder="Documento"
                                                    onChange={(e) => setDocument(e.target.value)}

                                                />
                                            </div>
                                            <div class="form-group mb-4">
                                                <label for="password" class="sr-only">Contraseña</label>
                                                <input
                                                    estado={password}
                                                    cambiarEstado={setPassword}
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="form-control"
                                                    placeholder="***********"
                                                    onChange={(e) => setPassword(e.target.value)}

                                                />
                                            </div>
                                            <div class="form-group mb-4">
                                                <label for="password" class="sr-only">Repetir Contraseña</label>
                                                <input
                                                
                                                    estado={password2}
                                                    cambiarEstado={setPassword2}
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="form-control"
                                                    placeholder="***********"
                                                    onChange={(e) => setPassword(e.target.value)}

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}