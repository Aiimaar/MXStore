import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "/public/M.svg";
import "./HEADER.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header-container">
            <header>
                <link rel="icon" type="image/svg+xml" href={logo} />
                <img src={logo} alt="MXStore Logo" className="header-logo" />
                <h1 className="header-name">MXStore</h1>
                <FontAwesomeIcon icon={faBars} className="header-menu-icon" onClick={toggleMenu} />
                <nav className={menuOpen ? "header-nav-mobile" : "header-nav"}>
                    <Link to="/home">Inicio</Link>
                    <Link to="/bikes">Motos</Link>
                    <Link to="/equipment">Equipamiento</Link>
                    <Link to="/helmets">Cascos</Link>
                    <Link to="/pieces">Piezas</Link>
                </nav>
            </header>
        </div>
    );
}

export default Header;