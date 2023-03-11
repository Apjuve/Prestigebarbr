import React from 'react'
import aboutImg from '../../images/blades.jpg';
import aboutImg2 from '../../images/about2.jpg';

const about = () => {
  return (
    <section id="about" className="about__section container section">
      <h2 className="section__title section__title-center">About</h2>
      <div className="about__info">
        <div className="about__text">
          <h3>Prestige Barbershop</h3>
          <p>
          Welcome to our Prestige barber website! We are thrilled to have you here and would like to take a moment to introduce ourselves.
          

          Our barbershop is dedicated to providing you with the ultimate grooming experience. Our team of skilled barbers are passionate about their craft and are committed to delivering the best haircuts, shaves, fades and grooming services possible.
          

          We believe that a great haircut is about more than just the end result - it's about the experience. That's why we've created a warm and inviting atmosphere that will make you feel right at home. Whether you're looking for a classic or modern haircut, our barbers will work with you to achieve the look you want.
          

          We offer a range of services including haircuts, fades, beard trims, and more. Our shop is equipped with the latest tools and technology to ensure that you receive the best possible results.
         
          So whether you're in need of a quick trim or a full grooming session, we've got you covered. We look forward to seeing you at our Prestige barbershop soon!

          </p>
        </div>
        <div className="about__images">
          <img
            className="first__image"
            src={aboutImg}
            alt="barber's equipment on desk"
          />
          <img
            className="second__image"
            src={aboutImg2}
            alt="trimming hair with scissors"
          />
        </div>
      </div>
    </section>
  )
}

export default about