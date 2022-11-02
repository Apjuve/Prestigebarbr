import React from 'react'
import heroImg from '../../images/Hero.jpg';
import Home from './Homes';

const hero = () => {
  return (
    <div class="hero">
      <img src={heroImg} class="home__img" alt="" />
      <Home></Home>
    </div>

  )
}

export default hero