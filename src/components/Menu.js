import React from 'react';
import './style.css';
import './style2.css';

import Home from '../Home.svg';
import Twitter from '../Images/Twitter.svg';

const Menu = () => {
    return (
        <>
            <div className="abs">
                <div className="fixed">

                    <div className="btnimgg">
                        <a href="#">
                            <img className="rounded mx-auto d-block resp" src={Home} alt="home" />
                        </a>
                    </div>

                    <div className="btnimgg">
                        <a href="http://www.twitter.com/_DeezzNutz_">
                            <img className="rounded mx-auto d-block resp" src={Twitter} alt="Twitter" />
                        </a>
                    </div>



                </div>
            </div>
        </>
    );
};

export default Menu;