import React from 'react';

import Button from "../Button";
import Logo from '../../assets/img/codelive.png';
import './menu.css';

function Menu() {
    return ( 
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src = {Logo} alt="Code Live Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    )
}
export default Menu;