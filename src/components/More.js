// import Styles from './sections/Styles';
// import Barbers from './sections/Barbers';
import style1 from '../images/Barber1.jpg';
import style2 from '../images/Barber2.jpg';
import style3 from '../images/barber3.jpg';
import style4 from '../images/barber4.jpg';
import style5 from '../images/barber5.jpg';
import style6 from '../images/barber6.jpg';
import style7 from '../images/barber7.jpg';
import style8 from '../images/barber8.jpg';
import style9 from '../images/barber9.jpg';
import style10 from '../images/barber10.jpg';
import style11 from '../images/barber11.jpg';
import style12 from '../images/barber12.jpg';
import style13 from '../images/barber13.jpg';
import style14 from '../images/barber14.jpg';
import style15 from '../images/barber15.jpg';
import style16 from '../images/barber16.jpg';
import style17 from '../images/barber17.jpg';
import style18 from '../images/barber18.jpg';
import style19 from '../images/barber19.jpg';
import style20 from '../images/barber20.jpg';
import style21 from '../images/barber21.jpg';
import style22 from '../images/barber22.jpg';
import style23 from '../images/barber23.jpg';
import style24 from '../images/barber24.jpg';



import React from 'react';
import { Link } from 'react-router-dom';

const More = () => {
    const [scrollState, setScrollState] = React.useState(false);
    const [menuState, setMenuState] = React.useState(false);

    const navLink = document.querySelectorAll('.nav__link')

    function linkAction() {
        setMenuState(false);
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    function scrollHeader() {
        if (this.scrollY >= 80) setScrollState(true);
        else setScrollState(false);
    }
    window.addEventListener('scroll', scrollHeader);


    return (
        <>
            <header className={`header ${scrollState ? 'scroll-header' : ''}`} id="header-more">
                <nav className="nav container more-nav">
                    <div className={`nav__menu ${menuState ? ' show-menu' : ''}`} id="nav-menu">
                        <ul className="nav__list">
                            <li className='nav__item'>
                                <Link to="/" className={"nav__link"}>Back</Link>
                            </li>
                        </ul>
                        <i className="ri-close-line nav__close" id="nav-close" onClick={() => setMenuState(false)}></i>
                    </div>

                    <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuState(true)}>
                        <i className="ri-function-line" ></i>
                    </div>
                </nav>
            </header>
            <section id="services" className="style__section container section">
                <h2 className="section__title section__title-center">Styles</h2>

                <div className="style__images">
                    <div className="img__block">
                        <img src={style1} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style2} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style3} alt="hairstyle" />

                    </div>
                    <div className="img__block">
                        <img src={style4} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img
                            src={style5}
                            alt="hairstyle"
                        />
                    </div>
                    <div className="img__block">
                        <img src={style6} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style7} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style8} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style9} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style10} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style11} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style12} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style13} alt="hairstyle" />
                    </div>
                    {/* <div className="img__block">
                    <img src={style14} alt="" />
                </div>
                <div className="img__block">
                    <img src={style15} alt="" />
                </div> */}
                    <div className="img__block">
                        <img src={style16} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style17} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style18} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style19} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style20} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style21} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style22} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style23} alt="hairstyle" />
                    </div>
                    <div className="img__block">
                        <img src={style24} alt="hairstyle" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default More