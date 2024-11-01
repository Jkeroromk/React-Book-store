import React from 'react';
import Logo from '../assets/Library.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row row__column'>
          <Link to="/">
            <figure className='footer__logo'>
              <img src={Logo} alt="" className='footer__logo--img' />
            </figure>
          </Link>
          <div className='footer__list'>
            <ul>
              <li><Link to="/" className='footer__link'>Home</Link></li>
              <li><Link to="/Books" className='footer__link'>Books</Link></li>
              <li><Link to="/" className='footer__link'>Contact</Link></li>
              <li><Link to="/cart" className='footer__link'>Cart</Link></li>
            </ul>
          </div>
          <div className='footer__copyright'>
            Copyright &copy; 2024 Library 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

