import React from "react";
import './Bestseller.css';
import { PiLessThanBold } from "react-icons/pi";
import { PiGreaterThanBold } from "react-icons/pi";

const Bestseller = () => {
    return (
        <div className="bestseller">
            <div>
                <h1>BESTSELLERS</h1>
            </div>
            <div className="paan-type">
                <PiLessThanBold />
                <div>
                    <img src="" />
                    <p>Calcutta Saada Paan(pack of x)</p>
                </div>
                <div>
                    <img src="" />
                    <p>Calcutta Meetha Paan(pack of x)</p>
                </div>
                <div>
                    <img src="" />
                    <p>Dark Chocolate Coated Paan(pack of x)</p>
                </div>
                <div>
                    <img src="" />
                    <p>Dry Fruit Meetha Paan(pack of x)</p>
                </div>
                <div>
                    <img src="" />
                    <p>Magai Meetha Paan(pack of x)</p>
                </div>
                <div>
                    <img src="" />
                    <p>Meenakshi Meetha Paan(pack of x)</p>
                </div>
                <PiGreaterThanBold />
            </div>
        </div>
    )
}

export default Bestseller;