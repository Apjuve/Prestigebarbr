import React from 'react'

const services = () => {
  return (
    <section id="services" class="services__section container section">
      <h2 class="section__title section__title-center">Services</h2>

      <div class="services__images">

        <div class="img__block">
          <img class="service__img-1" src="assets/images/Lineup.jpg" alt="" />
          <div class="text__box">
            <p>Line-ups</p>
          </div>
        </div>
        <div class="img__block">
          <img class="service__img-2" src="assets/images/haircut.jpg" alt="" />
          <div class="text__box">
            <p>Beard Trims</p>
          </div>
        </div>
        <div class="img__block">
          <img class="service__img-3" src="assets/images/styling.jpg" alt="" />
          <div class="text__box">
            <p>Styling</p>
          </div>
        </div>


        <div class="img__block">
          <img class="service__img-4" src="assets/images/products.jpg" alt="" />
          <div class="text__box">
            <p>Quality Products</p>
          </div>
        </div>
        <div class="img__block">
          <img
            class="service__img-5"
            src="assets/images/equipment.jpg"
            alt=""
          />
          <div class="text__box">
            <p>Finest Equipment</p>
          </div>
        </div>
        <div class="img__block">
          <img class="service__img-6" src="assets/images/chair.jpg" alt="" />
          <div class="text__box">
            <p>Comfortable Experience</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default services