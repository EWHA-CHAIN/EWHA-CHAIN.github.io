import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import './style.css'
import Home from "./Home";

const Header = () => {
  return(
    <header>
      <img/>
      <nav>
        <ul><li><NavLink to="/">Home</NavLink></li></ul>
        <ul><li><NavLink to="/alumni">Alumni</NavLink></li></ul>
        <ul><li><NavLink to="/portfolio">Portfolio</NavLink></li></ul>
        <ul><li><NavLink to="/recruiting">Recruiting</NavLink></li></ul>
      </nav>
    </header>
  )
}

export default Header