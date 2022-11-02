import React from 'react'
import lineup from '../../images/Lineup.jpg';
import haircut from '../../images/haircut.jpg';
import styling from '../../images/styling.jpg';
import products from '../../images/products.jpg';
import equipment from '../../images/equipment.jpg';
import chair from '../../images/chair.jpg';

const services = () => {
  return (
    <section id="services" class="services__section container section">
      <h2 class="section__title section__title-center">Services</h2>

      <div class="services__images">

        <div class="img__block">
          <img class="service__img-1" src={lineup} alt="" />
          <div class="text__box">
            <p>Line-ups</p>
          </div>
        </div>
        <div class="img__block">
          <img class="service__img-2" src={haircut} alt="" />
          <div class="text__box">
            <p>Beard Trims</p>
          </div>
        </div>
        <div class="img__block">
          <img class="service__img-3" src={styling} alt="" />
          <div class="text__box">
            <p>Styling</p>
          </div>
        </div>


        <div class="img__block">
          <img class="service__img-4" src={products} alt="" />
          <div class="text__box">
            <p>Quality Products</p>
          </div>
        </div>
        <div class="img__block">
          <img
            class="service__img-5"
            src={equipment}
            alt=""
          />
          <div class="text__box">
            <p>Finest Equipment</p>
          </div>
        </div>
        <div class="img__block">
          <img class="service__img-6" src={chair} alt="" />
          <div class="text__box">
            <p>Comfortable Experience</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default services