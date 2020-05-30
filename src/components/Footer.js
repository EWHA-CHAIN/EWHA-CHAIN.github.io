import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import Facebook from '../static/image/facebook.png'
import Instagram from '../static/image/instagram.png'
import './style.css'

const Footer = () => {
  const top = () => {
    window.scrollTo(0,0)
  }
  return(
    <footer>
      <div className="left_sec">서울특별시 서대문구 이화여대길 52</div>
      <div className="right_sec">
        <div>Follow Us!</div>
        <div className="social_logo">
          <a href="https://www.facebook.com/ewha.chain" target="_blank"><img alt="facebook" src={Facebook}/></a>
          <a><img alt="instagram" src={Instagram}/></a>
        </div>
      </div>

    </footer>
  )
}

export default Footer