import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
import webicon from "../../imgs/web-icon.png"


const Navbar = () => {
  return (
    <>
        <div className="navbar">
        <div className="container nav-content">

          <div className="logo">
            <span className="logo-icon">
              <img src={webicon} />
            </span>
            <span className="logo-text">Bistro Bliss</span>
          </div>

          <ul className="nav-links">
            <li className="active"><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/menu"}>Menu</NavLink></li>
            <li><NavLink to={"/book"}>Book A Table</NavLink></li>
            <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
            <li><NavLink to={"/blog"}>Blog</NavLink></li>
          </ul>

          <button className="btn-outline">Book A Table</button>

        </div>
      </div>
    </>
  )
}

export default Navbar
