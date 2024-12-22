import react, { useState } from "react";
import './styles.css';
import logo from '../../assets/logo.jpg'
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer>
            <img style={{ "object-fit": "contain" }} id="logo" src={logo} />
            <span>Todos os direitos reservados©</span>
            <span>Desenvolvido por Filipe Guimaraes</span>
            <div className="footer-navigation">
                <div className="footer-list">
                    <Link style={{ textDecoration: 'none' }} to="/">

                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>

                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>

                        <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/comentario'>

                        <li>Comentarios</li>
                    </Link>

                </div>
            </div>
        </footer>
    )
}

export default Footer