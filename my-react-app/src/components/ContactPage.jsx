import React from "react";
import Navbar from "../HomeSection/Navbar";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const ContactPage = () => {
    return (
        <div>
            <div>
                <div>
                    <p>Contact</p>
                </div>
                <div>
                    <p>Name:</p>
                    <input placeholder="Enter your name here" type="name" />
                </div>
                <div>
                    <p>Email:</p>
                    <input placeholder="Enter mail id" type="email" />
                </div>
                <div>
                    <label for="phone">Enter your phone number:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                </div>
                <div>
                    <label for="message">Message:</label>
                    <textarea rows="4" cols="50" name="comment" form="userform">
                        Enter text here...</textarea>
                </div>
                <button>Send <IoMdSend /></button>
            </div>
        </div>
    )
}

export default ContactPage;