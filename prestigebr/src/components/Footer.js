import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" class="footer__section container">
      <h2 class="section__title section__title-center">Contact Us</h2>
      <div class="footer__content">
        <a href="#" class="logo">Prestige <span>Barbershop</span></a>
        <div class="location__info">
          <h3 class="footer__title">Our Address</h3>

          <ul class="footer__data">
            <li class="footer__information">1234 - Peru</li>
            <li class="footer__information">La Libertad - 43210</li>
            <li class="footer__information">123-456-789</li>
          </ul>
        </div>
        <div class="contact__info">
          <h3 class="footer__title">Contact Us</h3>

          <ul class="footer__data">
            <li class="footer__information">+999 888 777</li>

            <div class="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="footer__social-link"
              >
                <i class="ri-facebook-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="footer__social-link"
              >
                <i class="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="footer__social-link"
              >
                <i class="ri-twitter-fill"></i>
              </a>
            </div>
          </ul>
        </div>
      </div>

      <p class="footer__copy">&#169; jbramirez03/Apjuve. All rights reserved</p>
    </footer>
  )
}

export default Footer