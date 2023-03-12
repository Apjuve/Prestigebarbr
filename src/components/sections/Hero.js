import React from 'react'
import heroImg from '../../images/Hero.jpg';
import Home from './Home';

const hero = () => {
  return (
    <div className="hero">
      <img src={heroImg} className="home__img" alt="guy in chair" />
      <Home></Home>
    </div>

  )
}

export default hero