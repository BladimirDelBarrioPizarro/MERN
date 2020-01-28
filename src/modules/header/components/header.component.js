import React from 'react';

const Header = () => {
    return (
        <header className="app-header">
            <p className="user-name">Hola<span> Bladi</span></p>

            <nav className="nav-principal">
                <a href='#'>Cerrar sesión</a>
            </nav>
        </header>
    );
}

export default Header;