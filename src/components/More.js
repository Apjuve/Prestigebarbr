// import Styles from './sections/Styles';
// import Barbers from './sections/Barbers';
import lineup from '../images/Lineup.jpg';

import React from 'react'

const More = () => {
    return (
        <section id="services" className="style__section container section">
            <h2 className="section__title section__title-center">Styles</h2>

            <div className="style__images">
                <div className="img__block">
                    <img src={lineup} alt="" />
                    <div className="text__box">
                        <p>Line-ups</p>
                    </div>
                </div>
                <div className="img__block">
                    <img src={lineup} alt="" />
                    <div className="text__box">
                        <p>Beard Trims</p>
                    </div>
                </div>
                <div className="img__block">
                    <img src={lineup} alt="" />
                    <div className="text__box">
                        <p>Styling</p>
                    </div>
                </div>


                <div className="img__block">
                    <img src={lineup} alt="" />
                    <div className="text__box">
                        <p>Quality Products</p>
                    </div>
                </div>
                <div className="img__block">
                    <img
                        src={lineup}
                        alt=""
                    />
                    <div className="text__box">
                        <p>Finest Equipment</p>
                    </div>
                </div>
                <div className="img__block">
                    <img src={lineup} alt="" />
                    <div className="text__box">
                        <p>Comfortable Experience</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default More