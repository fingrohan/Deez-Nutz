import React from 'react';
import './style.css';
import './style2.css';

import Logo from '../Images/logo.svg';
import Heroimg from '../Images/hero.png';
import { useSpring, animated } from "react-spring";




const Hero = () => {
    return (
        <>

            <div>
                <div className="img">
                    <img className="rounded mx-auto d-block hero item1" src={Logo} alt="logo" />
                </div>
                <img className="rounded mx-auto d-block hero item2" src={Heroimg} alt="hero" />
            </div>
        </>
    );
};

export default Hero;