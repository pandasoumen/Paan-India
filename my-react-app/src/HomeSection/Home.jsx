import React, { useState } from "react";
import './Home.css';
import Bestseller from "./Bestseller";
import Footer from "./Footer";
import Navbar from "./Navbar";

const NavPage = () => {

    return (
        <div>
            {/* home section */}
            <div className="home">
                <div className="box1">
                    <div className="box1-left"> <img alt="logo" /></div>
                    <div className="box1-right">
                        <h1>PAAN <br />The Healthy <br /> Indian Desert</h1>
                        <h4>Re-Defining the Old Age <br />Tradition of Paan</h4>
                        <h6>Now delivered at your Dooestep</h6>
                        <button>EXPLORE</button>
                    </div>
                </div>

                <video height="auto" controls loop autoPlay muted >
                
                </video>
                {/* cards */}
                <div className="cards">
                    <div>
                        <img />
                        <p>Explore our range of</p>
                        <h2>Healthy
                            Desserts</h2>
                        <button>
                            ORDER NOW
                        </button>
                    </div>
                    <div>
                        <logo></logo>
                        <h4>FRESH PAAN</h4>
                        <p>Paan the Healthy Indian <br />Desert<br />45 Varieties</p>
                        <button>ORDER NOW</button>
                        <img />
                    </div>
                    <div>
                        <img />
                        <img />
                    </div>
                    <div>
                        <logo></logo>
                        <h5>ARID (DRY PAAN)</h5>
                        <p>Paan in the pocket</p>
                        <button>ORDER NOW</button>
                        <img />
                    </div>
                    <div>
                        <logo></logo>
                        <h5>BETEL LEAF TEA</h5>
                        <p>The Goodness of Paan now <br />in a cup<br />4 Varieties</p>
                        <button>ORDER NOW</button>
                        <img />
                    </div>
                    <div>
                        <logo></logo>
                        <h5>BETEL BARS</h5>
                        <p>Meetha Paan infused <br />Chocolate bars <br />4 Varieties</p>
                        <button>ORDER NOW</button>
                        <img />
                    </div>
                    <div>
                        <logo></logo>
                        <h5>BETEL DELIGHT</h5>
                        <p>Melange of Date Meetha<br />Paan & Chocolate <br />4 Varieties</p>
                        <button>ORDER NOW</button>
                        <img />
                    </div>
                    <div>
                        <logo></logo>
                        <h5>CELEBRATION PACK</h5>
                        <button>ORDER NOW</button>
                        <img />
                    </div>
                </div>
            </div>
            <Bestseller />
            <Footer />
        </div>
    )
}

export default NavPage;