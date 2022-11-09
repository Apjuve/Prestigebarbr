import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';

const Header = () => {


  let activeClassName = "underline";

  const navLink = document.querySelectorAll('.nav__link')

  function linkAction() {
    // When we click on each nav__link, we remove the show-menu class
    setMenuState(false);
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))

  function scrollHeader() {
    if (this.scrollY >= 80) setScrollState(true);
    else setScrollState(false);
  }
  window.addEventListener('scroll', scrollHeader);

  const [menuState, setMenuState] = React.useState(false);
  const [scrollState, setScrollState] = React.useState(false);






  return (
    <header className={`header ${scrollState ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <a href="#" className="logo"
        >Prestige<span className="logo-alternate">Barber</span></a
        >

        <div className={`nav__menu ${menuState ? ' show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              {/* <a href="#" className="nav__link">Home</a> */}
              <NavLink to='#'
                // className={'nav__link'}
                className={'nav__link'}
              >Home</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/#about"
                className={'nav__link'}
              >About</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/#services" className="nav__link">Services</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/#contact" className="nav__link">Contact</NavLink>
            </li>
          </ul>

          <i className="ri-close-line nav__close" id="nav-close" onClick={() => setMenuState(false)}></i>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuState(true)}>
          <i className="ri-function-line" ></i>
        </div>
      </nav>
    </header>
  )
}

export default Header


