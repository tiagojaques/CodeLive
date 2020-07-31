import React from 'react';
import { Link } from "react-router-dom";
import Button from "../Button";
import Logo from '../../assets/img/codelive.png';
import './menu.css';

function Menu() {
    return ( 
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src = {Logo} alt="Code Live Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    )
}
export default Menu;