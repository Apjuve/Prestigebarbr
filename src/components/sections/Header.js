import React from 'react'

const header = () => {
  return (
    <header class="header" id="header">
        <nav class="nav container">
          <a href="#" class="logo"
            >Prestige<span class="logo-alternate">Barber</span></a
          >

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item">
                <a href="#" class="nav__link">Home</a>
              </li>
              <li class="nav__item">
                <a href="#about" class="nav__link">About</a>
              </li>
              <li class="nav__item">
                <a href="#services" class="nav__link">Services</a>
              </li>
              <li class="nav__item">
                <a href="#contact" class="nav__link">Contact</a>
              </li>
            </ul>

            <i class="ri-close-line nav__close" id="nav-close"></i>
          </div>

          <div class="nav__toggle" id="nav-toggle">
            <i class="ri-function-line"></i>
          </div>
        </nav>
      </header>
  )
}

export default header


