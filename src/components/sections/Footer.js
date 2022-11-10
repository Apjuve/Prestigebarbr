import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="footer__section container">
      <h2 className="section__title section__title-center">Contact Us</h2>
      <div className="footer__content">
        <a href="#" className="logo">Prestige <span>Barbershop</span></a>
        <div className="location__info">
          <h3 className="footer__title">Our Address</h3>

          <ul className="footer__data">
            <li className="footer__information">1412 Blowing Rock Blvd</li>
            <li className="footer__information">Lenoir, NC 28645</li>
            <li className="footer__information">828-572-7000</li>
          </ul>
        </div>
        <div className="contact__info">
          <h3 className="footer__title">Contact Us</h3>

          <ul className="footer__data">
            <li className="footer__information">+828 449 4020</li>

            <div className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel='noreferrer'
                className="footer__social-link"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel='noreferrer'
                className="footer__social-link"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel='noreferrer'
                className="footer__social-link"
              >
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </ul>
        </div>
      </div>

      <p className="footer__copy">&#169; jbramirez03/Apjuve. All rights reserved</p>
    </footer>
  )
}

export default Footer