// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          {/* Coloca aquí el código para mostrar el logo */}
          <Link to="/">Burger Queen</Link>
        </div>
        <ul className="nav-links">
          {/* Coloca aquí los enlaces del menú de navegación */}
          <li>
            <Link to="/menu">Menú</Link>
          </li>
          <li>
            <Link to="/orders">Pedidos</Link>
          </li>
          {/* Otros enlaces del menú aquí */}
        </ul>
        <div className="logout-button">
          {/* Coloca aquí el código para el botón de cerrar sesión */}
          <Link to="/login">
            <button>Log out</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
