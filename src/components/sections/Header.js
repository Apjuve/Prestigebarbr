import React from 'react'

const header = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="logo"
        >Prestige<span className="logo-alternate">Barber</span></a
        >

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">About</a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">Services</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">Contact</a>
            </li>
          </ul>

          <i className="ri-close-line nav__close" id="nav-close"></i>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
  )
}

export default header


