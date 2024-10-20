import React, { Fragment } from "react";
import './Footer.css'
import { VscChevronUp } from "react-icons/vsc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <div className="footer">
                <div className="back-top" onClick={goToTop}>
                    <p >Back to the top <VscChevronUp /></p>
                </div>
                <div className="input">
                    <input placeholder="Email address" />
                    <button>SUBSCRIBE</button>
                </div>
                <div className="logos">
                    <FaFacebook />
                    <FaInstagram />
                    <FaLinkedin />
                </div>
                <div className="all-about">
                    <div className="logo">
                        <img src="" alt="logo" />
                    </div>
                    <div className="first">
                        <p>33,Millers Rd, Kaverappa Layout, Vasanth Nagar,<br />Bengaluru , Karnataka 560051</p>
                        <p><a href="Phone No:">+91 6366681111</a></p>
                        <p><a href="mailto:thebetelleafco@gmail.com">thebetelleafco@gmail.com</a></p>
                        <p>Store Timing :</p>
                        <p>11:15 AM to 11:00 PM</p>
                        <p>We are open on ALL DAYS</p>
                    </div>
                    <div className="second">
                        <p><a href="#">About Us</a></p>
                        <p><a href="#">Subscription</a></p>
                        <p><a href="#">Privacy Policy</a></p>
                        <p><a href="#">Refund Policy</a></p>
                        <p><a href="#">Shipping Policy</a></p>
                        <p><a href="#">Terms And Condition</a></p>
                        <p><a href="#">Contact Us</a></p>
                    </div>
                    <div className="third">
                        <p><a href="#">Order Now</a></p>
                        <p><a href="#">About Us</a></p>
                        <p><a href="#">Franchise</a></p>
                        <p><a href="#">Contact</a></p>
                        <p><a href="#">My account</a></p>
                    </div>
                </div>
                <div className="bottom-copyright">
                    <p className="copyright">Copyright <MdCopyright /> 2024 The Betel Leaf Co.</p>
                    <p className="powered">Powered By____</p>
                </div>
            </div>
        </>
    )
}
export default Footer;