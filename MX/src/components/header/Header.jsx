import { Link } from "react-router-dom";
import "./Header.css";
import logo from "/public/M.svg";

function Header() {
    return (
        <div className="header-container">
            <header>
            <link rel="icon" type="image/svg+xml" href={logo} />
            <img src={logo} alt="MXStore Logo" className="header-logo" />
                <h1 className="header-name">MXStore</h1>
                <nav>
                    <Link to="/home">Inicio</Link>
                    <Link to="/bikes">Motos</Link>
                    <Link to="/equipment">Equipamiento</Link>
                    <Link to="/helmets">Cascos</Link>
                    <Link to="/pieces">Piezas</Link>
                    <Link to="/plastics">Plásticos</Link>
                </nav>
            </header>
        </div>
    );
}

export default Header