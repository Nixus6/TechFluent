import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../../components/navbar/navbar'
import './main.css'
const API = process.env.REACT_APP_API;

function Main() {
    return (
        <>
            <Navbar />
            <section className="Fondo" />
            <h1>
                Landing Page
            </h1>
        </>
    )
}
export default Main;