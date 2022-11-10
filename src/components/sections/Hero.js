import React from 'react'
import heroImg from '../../images/hero.jpg';
import Home from './Home';

const hero = () => {
  return (
    <div className="hero">
      <img src={heroImg} className="home__img" alt="" />
      <Home></Home>
    </div>

  )
}

export default hero