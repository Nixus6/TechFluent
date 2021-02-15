import React, { useState, useEffect, useRef } from 'react'
import image from './img/rent.jpg'
import './login.css'
import Cookies from 'universal-cookie'

const API = process.env.REACT_APP_API;


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API}/login`, {

            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })

        })
        const datas = await res.json();
        if (datas) {
            // console.log(data);
            // console.log("true");
            const cookies = new Cookies();
            cookies.set('id', datas.id, { path: "/" });
            cookies.set('document', datas.document, { path: "/" });
            cookies.set('name', datas.name, { path: "/" });
            cookies.set('lastname', datas.lastname, { path: "/" });
            cookies.set('privilege', datas.privilege, { path: "/" });
            cookies.set('email', datas.email, { path: "/" });
            alert(`Bienvenido ${datas.name} ${datas.lastname}`);
            window.location.href = "./properties";

        } else {
            console.log("Contraseña O Email Incorrectos");
        }
    }
    return (
        <>
            <div className="container p-4">
                <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
                    <div className="container">
                        <div className="card login-card">
                            <div class="row no-gutters">
                                <div class="col-md-5" id="LeftImage" >
                                    <img src={image} alt="login" class="login-card-img" />
                                </div>
                                <div class="col-md-7">
                                    <div class="card-body">
                                        <p class="login-card-description">Login</p>
                                        <form onSubmit={handleSubmit}>
                                            <div class="form-group">
                                                <label for="email" class="sr-only">email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    class="form-control"
                                                    placeholder="ejemplo@ejemplo.com"
                                                    onChange={(e) => setEmail(e.target.value)}
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
                                            <input name="login" id="login" class="btn btn-block login-btn mb-4" type="submit" value="Login" />
                                        </form>
                                        <a href="#!" class="forgot-password-link">Forgot password?</a>
                                        <p class="login-card-footer-text" id="Register">Eres Propietario de Un Inmueble? <a href="<?php echo SERVERURL; ?>RegisterPropietary" class="text-reset">Registrate Aqui</a></p>
                                        <p class="login-card-footer-text">Quieres Alquilar Un Inmueble? <a href="<?php echo SERVERURL; ?>RegisterCompany" class="text-reset">Registrate Aqui</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )

}
