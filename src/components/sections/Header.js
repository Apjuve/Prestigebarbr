import React from 'react'

const Header = () => {

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


