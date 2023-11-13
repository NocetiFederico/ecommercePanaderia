import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../../public/image/logo.png';

export const NavBar = () => {
    return (

            <div className='calls-header'>
                <img src={logo} alt="foto-logo" />
                <h1>Panaderia La Romana</h1>
                <nav>
                <Link className='link' to="/">Inicio</Link>
                <Link className='link' to="/dolar">Dolar</Link>
                </nav>
            </div>

    )
}