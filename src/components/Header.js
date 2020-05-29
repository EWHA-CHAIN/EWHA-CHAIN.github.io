import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css'

const Header = () => {
  return(
    <header id="Header">
      <nav className="nav-bar">
        <div className="nav-bar-div">
        <img className="header_logo" alt="logo"/>
        <ul className="header_right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/alumni">Alumni</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/recruiting">Recruiting</NavLink></li>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
