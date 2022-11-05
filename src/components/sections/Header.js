import React from 'react'

const Header = () => {
  const [menuState, setMenuState] = React.useState(false);

  function scrollHeader() {
    const header = document.getElementById('header');

    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  }

  window.addEventListener('scroll', scrollHeader);


  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="logo"
        >Prestige<span className="logo-alternate">Barber</span></a
        >

        <div className={`nav__menu ${menuState ? ' show-menu' : ''}`} id="nav-menu">
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

