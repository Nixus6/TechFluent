import React, { useState, useEffect, useRef } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const API = process.env.REACT_APP_API;

export const Register = () => {
    const [document, setDocument] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [privilege, setPrivilege] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        const res = await fetch('${API}/Users', {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                document,
                name,
                lastname,
                privilege,
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
                    <div class="row no-gutters">
                        <div class="col-md-5" id="LeftImage" >
                            <img  alt="login" class="login-card-img" />
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <p class="login-card-description">Login</p>
                                <form onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <label for="document" class="sr-only">email</label>
                                        <input
                                            type="text"
                                            name="document"
                                            id="document"
                                            class="form-control"
                                            placeholder="Documento"
                                            onChange={(e) => setDocument(e.target.value)}
                                            autoFocus
                                        />
                                    </div>
                                    <div class="form-group mb-4">
                                        <label for="password" class="sr-only">Contraseña</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="form-control"
                                            placeholder="***********"
                                            onChange={(e) => setPassword(e.target.value)}

                                        />
                                    </div>
                                    <div class="form-group mb-4">
                                        <label for="password" class="sr-only">Contraseña</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="form-control"
                                            placeholder="***********"
                                            onChange={(e) => setPassword(e.target.value)}

                                        />
                                    </div>
                                    <input name="register" id="register" class="btn btn-block login-btn mb-4" type="submit" value="Login" />
                                </form>
                                <a href="#!" class="forgot-password-link">Forgot password?</a>
                                <p class="login-card-footer-text" s>Eres Propietario de Un Inmueble? <a href="<?php echo SERVERURL; ?>RegisterPropietary" class="text-reset">Registrate Aqui</a></p>
                                <p class="login-card-footer-text">Quieres Alquilar Un Inmueble? <a href="<?php echo SERVERURL; ?>RegisterCompany" class="text-reset">Registrate Aqui</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}