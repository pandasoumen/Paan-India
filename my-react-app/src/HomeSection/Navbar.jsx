import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import './Navbar.css';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    const [search, setSearch] = useState(true);

    function changeHandler() {

    }

    function slideHandler() {

    }

    return (
        <>
            <nav className="navbar">
                <Link className="menu"> <GiHamburgerMenu onClick={slideHandler} />
                </Link>

                <NavLink to='/'>
                    <img src="./img/logo.png" alt="logo" className="logo" />
                </NavLink>

                <div className="middle">
                    <div list="paans" name="paan" className="shopnow navvalue">
                        <label>Shop Now</label>
                        <IoIosArrowDown />

                        <datalist id="paans">
                            <option value="Meethi paan" >Subcription</option>
                            <option value="Meethi paan" >Meetha paan</option>
                            <option value="Chocolate paan">Chocolate paan</option>
                            <option value="Masala Paan">Masala Paan</option>
                            <option value="Simple Paan">Simple Paan</option>
                        </datalist>
                    </div>

                    <NavLink to='/aboutuspage' className="navvalue">About Us</NavLink>

                    <NavLink to='/franchaise' className="navvalue">Franchaise</NavLink>

                    <NavLink to='/contactpage' className="navvalue">Contact</NavLink>

                    <NavLink to='/accountpage' className="navvalue">My Account</NavLink>
                </div>

                <div className="search-logo" >
                    <IoSearch onClick={changeHandler} id="search" />
                </div>
                
                <NavLink to='/accountpage' className="account"><MdAccountCircle /></NavLink>
            </nav>
        </>
    )
}

export default Navbar;