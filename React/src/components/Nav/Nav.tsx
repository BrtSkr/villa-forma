import { useState, useEffect } from 'react';
import './Nav.scss';
import logo from '../../assets/img/logo.png';
const Nav = () => {
    const [isVisible, setIsVisible] = useState(false);
    const websiteWidth = window.innerWidth;
    useEffect(() => {
        console.log(isVisible)
        console.log(websiteWidth)
    }, [isVisible, websiteWidth])
    return (
        <>
            <nav className="nav">
                <img className="nav_logo" src={logo} alt="Villa Forma" />
                <div className={`nav_container ${isVisible && websiteWidth < 1100 ? 'navbar_moved' : 'navbar_inplace'}`}>
                    <button onClick={() => setIsVisible(false)} className={`nav_container__closeBtn`}>X</button>
                    <a className="nav_container__anchor" href="#">Inwestycja</a>
                    <a className="nav_container__anchor" href="#">Galeria</a>
                    <a className="nav_container__anchor" href="#">Lokalizacja</a>
                    <a className="nav_container__anchor" href="#">Deweloper</a>
                    <a className="nav_container__anchor" href="#">Kontakt</a>
                    <button className="nav_container__btn">+48 780 033 791</button>
                </div>
                <button onClick={() => setIsVisible(true)} className={`nav_switch ${isVisible ? 'switch_hidden' : 'switch_visible'}`} aria-label="Contact: +48 780 033 791">
                    <span></span><span></span><span></span>
                </button>
            </nav>
        </>
    )
}

export default Nav;