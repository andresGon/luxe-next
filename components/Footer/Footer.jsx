import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h2 className="footer__logo">LuxeHabitat</h2>
          <p>Contact our customer happiness team</p>
          <p>Monday–Friday 9am–5pm</p>
          <p>(02) 6188 8062</p>
        </div>
        <div className="footer__center">
          <h3>Our social</h3>
          <div className="footer__social-icons">
            <a href="#" className="footer__icon">
            <img src="/icons/tik-tok-icon.svg" alt="TikTok Icon"/>
            </a>
            <a href="#" className="footer__icon">
              <img src="/icons/x-icon.svg" alt="X Icon" width="20" height="20" />
            </a>
            <a href="#" className="footer__icon">
              <img src="/icons/instagram-icon.svg" alt="Instagram Icon" width="20" height="20" />
            </a>
            <a href="#" className="footer__icon">
                <img src="/icons/face-icon.svg" alt="Facebook Icon" width="20" height="20" />
            </a>
          </div>
        </div>
        <div className="footer__right">
          <p>2024 - tienda. all Rights Reserved.</p>
        </div>
      </div>
      <div className="footer__bottom-line"></div>
    </footer>
  );
};

export default Footer;
