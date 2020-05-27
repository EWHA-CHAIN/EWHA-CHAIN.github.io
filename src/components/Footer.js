import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import Facebook from '../static/image/facebook.png'
import Instagram from '../static/image/instagram.png'
import './style.css'

const Footer = () => {
  return(
    <footer>
      <div className="left_sec">서울특별시 서대문구 이화여대길 52</div>
      <div className="right_sec">
        <div>Follow Us!</div>
        <div className="social_logo">
          <img alt="facebook" src={Facebook}/>
          <img alt="instagram" src={Instagram}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer