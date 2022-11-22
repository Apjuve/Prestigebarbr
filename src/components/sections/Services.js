import React from 'react'
import lineup from '../../images/Lineup.jpg';
import haircut from '../../images/haircut.jpg';
import styling from '../../images/styling.jpg';
import products from '../../images/products.jpg';
import equipment from '../../images/equipment.jpg';
import chair from '../../images/chair.jpg';

const services = () => {
  return (
    <section id="services" className="services__section container section">
      <h2 className="section__title section__title-center">Services</h2>

      <div className="services__images">

        <div className="img__block">
          <img src={lineup} alt="barber service" />
          <div className="text__box">
            <p>Line-ups</p>
          </div>
        </div>
        <div className="img__block">
          <img src={haircut} alt="barber service" />
          <div className="text__box">
            <p>Beard Trims</p>
          </div>
        </div>
        <div className="img__block">
          <img src={styling} alt="barber service" />
          <div className="text__box">
            <p>Styling</p>
          </div>
        </div>


        <div className="img__block">
          <img src={products} alt="barber service" />
          <div className="text__box">
            <p>Quality Products</p>
          </div>
        </div>
        <div className="img__block">
          <img
            src={equipment}
            alt="barber service"
          />
          <div className="text__box">
            <p>Finest Equipment</p>
          </div>
        </div>
        <div className="img__block">
          <img src={chair} alt="barber service" />
          <div className="text__box">
            <p>Comfortable Experience</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default services