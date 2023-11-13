import React from 'react';
import './style.css';
import logo from '../../../public/image/logo.png';



export const Footer = () => {
    return (
        <div className="container">
            <h3>La Romana</h3>
            <img src={logo} alt="foto-logo" />
            <p>¡Veni y Proba que te va a encantar!</p>
            <div className="datos-admin">
                <h4> Datos Administrativos </h4>
                <p>Razón Social: La Romana/
                    Cuit: 30-71119543-9/
                    Convenio Multilateral: 902-539472-7/
                    Domicilio: Madariaga 1364 Parque Industrial de Almirante Brown./
                    Tipo Societario: Sociedad Anónima./
                </p>
            </div>
        </div>
            )
}