import react, { useState } from "react";
import './stylesHeader.css';
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from '../../assets/logo.jpg'

function Header() {
    const navigate = useNavigate()
    return (
        <header>
            <img src={logo} id='logo'></img>
            <nav>
                <ul>
                    <Link to='/' style={{ textDecoration: 'none' }}><li>Home</li></Link>
                    <Link to='/contato' style={{ textDecoration: 'none' }}><li>Contato</li></Link>

                    <Link to='/fotos' style={{ textDecoration: 'none' }}><li>Fotos</li></Link>
                    <Link to='/comentario' style={{ textDecoration: 'none' }}><li>Comentarios</li></Link>

                </ul>
            </nav>

        </header>
    )
}

export default Header