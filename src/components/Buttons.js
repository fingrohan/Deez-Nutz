import React from 'react';
import './style.css';
import './style2.css';

import Connect1 from '../Images/Connect1.svg';
import Nut from '../Images/Nut.svg';
import Connect2 from '../Images/Connect2.svg';

const Buttons = () => {
    return (
        <>

            <div className="btndiv buttons item3">

                <div className="space">
                    <div className="inbtn">
                        <a href="#">
                            <img src={Connect1} alt="Connect Wallet" className="btnimg" />
                        </a>
                    </div>
                </div>

                <div className="space">
                    <div className="inbtn">
                        <a href="#">
                            <img src={Nut} alt="Nut Now" className="btnimg" />
                        </a>
                    </div>
                </div>

                <div className="space hide">
                    <div className="inbtn">
                        <a href="#">
                            <img src={Connect2} alt="Connect Wallet" className="btnimg" />
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Buttons;