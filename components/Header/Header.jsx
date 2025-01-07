import React from 'react';
import './Header.scss';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <header className="header">
      {/* Barra superior */}
      <div className="header__top-bar">
        <span className="header__phone">Llámanos: +51 301 384 0556</span>
        <span className="header__collection">Servicio al cliente</span>
      </div>

      {/* Barra principal */}
      <div className="header__main">
        {/* Navegación */}
        <nav className="header__nav">
          <a href="/" className="header__link">Home</a>
          <a href="/sillones" className="header__link">Sillones</a>
          <a href="/mesas" className="header__link">Mesas</a>
          <a href="/comedores" className="header__link">Comedores</a>
          <a href="/camas" className="header__link">Camas</a>
        </nav>

        {/* Logo (actualmente comentado en tu código) */}
        <div className="header__logo">
          {/* <img src={logo} alt="LuxeHabitat Logo" width="100" height="auto" /> */}
        </div>

        {/* Iconos (incluyendo Clerk) */}
        <div className="header__icons">
          
          {/* Si el usuario está firmado (SignedIn), mostramos UserButton */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: 'w-[30px] h-[30px]', // Ejemplo para controlar tamaño
                },
              }}
            />
          </SignedIn>
          
          {/* Si el usuario está firmado (SignedOut), mostramos botón de "Sign In" */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="header__icon sign-in-btn">Iniciar Sesión</button>
            </SignInButton>
          </SignedOut>

          {/* Wishlist */}
          <a href="/wishlist" className="header__icon">
            {/* <img src={likeIcon} alt="Like Icon" width="20" height="20" /> */}
            <span className="header__badge">99</span>
          </a>

          {/* Cart */}
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
