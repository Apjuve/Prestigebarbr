import React from 'react'
import lineup from '../../images/Lineup.avif';
import haircut from '../../images/haircut.avif';
import styling from '../../images/styling.avif';
import products from '../../images/products.avif';
import equipment from '../../images/equipment.avif';
import chair from '../../images/chair.avif';

const services = () => {
  return (
    <section id="services" className="services__section container section">
      <h2 className="section__title section__title-center">Services</h2>

      <div className="services__images">

        <div className="img__block">
          <img className="service__img-1" src={lineup} alt="" />
          <div className="text__box">
            <p>Line-ups</p>
          </div>
        </div>
        <div className="img__block">
          <img className="service__img-2" src={haircut} alt="" />
          <div className="text__box">
            <p>Beard Trims</p>
          </div>
        </div>
        <div className="img__block">
          <img className="service__img-3" src={styling} alt="" />
          <div className="text__box">
            <p>Styling</p>
          </div>
        </div>


        <div className="img__block">
          <img className="service__img-4" src={products} alt="" />
          <div className="text__box">
            <p>Quality Products</p>
          </div>
        </div>
        <div className="img__block">
          <img
            className="service__img-5"
            src={equipment}
            alt=""
          />
          <div className="text__box">
            <p>Finest Equipment</p>
          </div>
        </div>
        <div className="img__block">
          <img className="service__img-6" src={chair} alt="" />
          <div className="text__box">
            <p>Comfortable Experience</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default services