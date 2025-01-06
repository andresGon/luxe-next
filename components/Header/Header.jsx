import React from 'react';
import './Header.scss';
//import userIcon from '../../assets/user-icon.svg'; // Ajusta la ruta según sea necesario
//import likeIcon from '../../assets/like-icon.svg'; // Importar el icono de like
//import cartIcon from '../../assets/cart-icon.svg'; // Importar el icono de carrito
//import logo from '../../assets/logo.svg'; // Importar el logo

const Header = () => {
  return (
    <header className="header">
      <div className="header__top-bar">
        <span className="header__phone">Llámanos: +51 301 384 0556</span>
        <span className="header__collection">Servicio al cliente</span>
      </div>
      <div className="header__main">
        <nav className="header__nav">
          <a href="/" className="header__link">Home</a>
          <a href="/sillones" className="header__link">Sillones</a>
          <a href="/mesas" className="header__link">Mesas</a>
          <a href="/comedores" className="header__link">Comedores</a>
          <a href="/camas" className="header__link">Camas</a>
        </nav>
        <div className="header__logo">
          {/* <img src={logo} alt="LuxeHabitat Logo" width="100" height="auto" /> */}
        </div>
        <div className="header__icons">
          <a href="/profile" className="header__icon">
            {/* <img src={userIcon} alt="User Icon" width="20" height="20" /> */}
          </a>
          <a href="/wishlist" className="header__icon">
            {/* <img src={likeIcon} alt="Like Icon" width="20" height="20" /> */}
            <span className="header__badge">99</span>
          </a>
          <a href="/cart" className="header__icon">
            {/* <img src={cartIcon} alt="Cart Icon" width="20" height="20" /> */}
            <span className="header__badge">99</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
