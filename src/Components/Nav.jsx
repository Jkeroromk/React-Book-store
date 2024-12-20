import React from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon
import LibraryLogo from '../assets/Library.svg';
import { Link } from "react-router-dom";


function Nav({numberOfItems}){

  function OpenMenu () {
    document.body.classList.add('menu--open')
  }

  function CloseMenu () {
    document.body.classList.remove('menu--open')
  }

    return (
        <nav>
            <div className="nav__container">
              <Link to="/">
                <img src={LibraryLogo} alt="" className="logo" />
              </Link>   
              <ul className="nav__links">
              <li className="nav__list">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__list">
                <Link to="/Books" className="nav__link">
                  Book
                </Link>
              </li>
              <li className="nav__list">
                <Link to="/" className="nav__link">
                  Contact
                </Link>
              </li>
              <button className="btn__menu" onClick={OpenMenu}>
                <FontAwesomeIcon icon="bars" /> 
              </button>
              <li className="nav__icon">
                <Link to="/cart" className="nav__link">
                <FontAwesomeIcon icon="shopping-cart" /> 
                </Link>
                {
                  numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>
                }
              </li>
              </ul>
              <div className="menu__backdrop">
                <button className="btn__menu btn__menu--close" onClick={CloseMenu}>
                  <FontAwesomeIcon icon="times" />
                </button>
                <ul className="menu__links">
                  <li className="menu__list">
                    <Link to="/" className="menu__link" onClick={CloseMenu} >Home</Link>
                  </li>
                  <li className="menu__list">
                    <Link to="/books" className="menu__link" onClick={CloseMenu}>Book</Link>
                  </li>
                  <li className="menu__list">
                    <Link to="/" className="menu__link" onClick={CloseMenu} >Contact</Link>
                  </li>
                  <li className="menu__list">
                    <Link to="/cart" className="menu__link" onClick={CloseMenu} >Cart</Link>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    );
}

export default Nav; // Ensure it's exported as Nav

