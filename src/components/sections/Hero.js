import React from 'react'
import heroImg from '../../images/Hero.avif';
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