// import Styles from './sections/Styles';
// import Barbers from './sections/Barbers';
// import lineup from '../images/Lineup.jpg';
import style1 from '../images/Barber1.jpg';
import style2 from '../images/Barber2.jpg';
import style3 from '../images/barber3.jpg';
import style4 from '../images/barber4.jpg';
import style5 from '../images/barber5.jpg';
import style6 from '../images/barber6.jpg';


import React from 'react'

const More = () => {
    return (
        <section id="services" className="style__section container section">
            <h2 className="section__title section__title-center">Styles</h2>

            <div className="style__images">
                <div className="img__block">
                    <img src={style1} alt="" />
                </div>
                <div className="img__block">
                    <img src={style2} alt="" />
                </div>
                <div className="img__block">
                    <img src={style3} alt="" />

                </div>
                <div className="img__block">
                    <img src={style4} alt="" />
                </div>
                <div className="img__block">
                    <img
                        src={style5}
                        alt=""
                    />
                </div>
                <div className="img__block">
                    <img src={style6} alt="" />
                </div>

            </div>
        </section>
    )
}

export default More