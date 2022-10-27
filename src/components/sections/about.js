import React from 'react'

const about = () => {
  return (
    <section id="about" class="about__section container section">
    <h2 class="section__title section__title-center">About</h2>
    <div class="about__info">
      <div class="about__text">
        <h3>Prestige Barbershop</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
          commodi, alias, fuga nemo maiores ex minus consectetur, provident
          corrupti odio perferendis? Neque culpa dolorum omnis excepturi vitae
          debitis asperiores cum!
        </p>
      </div>
      <div class="about__images">
        <img
          class="first__image"
          src="assets/images/about.jpg"
          alt="barber's equipment on desk"
        />
        <img
          class="second__image"
          src="assets/images/about2.jpg"
          alt="trimming hair with scissors"
        />
      </div>
    </div>
  </section>
  )
}

export default about