import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import Facebook from '../static/image/facebook.svg'
import Instagram from '../static/image/instagram.svg'
import Medium from '../static/image/medium.svg'
import Github from '../static/image/github.svg'
import Slack from '../static/image/slack.svg'
import './style.css'

const Footer = () => {
  const top = () => {
    window.scrollTo(0,0)
  }
  return(
    <footer id="Footer">
      <div className="left_sec">
        <div className="tit">CONTACT US</div>
        <div className="sub">이화여자대학교 블록체인학회 EWHA-CHAIN</div>
        <div className="light sub">ewha.chain@gmail.com</div>
        </div>
      <div className="right_sec">
        <div className="tit">Follow Us!</div>
        <div className="social_logo">
          <a href="" target="_blank" className="logo"><img alt="Slack" src={Slack}/></a>
          <a href="https://github.com/EWHA-CHAIN" target="_blank" className="logo"><img alt="Github" src={Github}/></a>
          <a href="https://medium.com/ewha-chain" target="_blank" className="logo"><img alt="Medium" src={Medium}/></a>
          <a href="" target="_blank" className="logo"><img alt="Facebook" src={Facebook}/></a>
          <a href="https://www.instagram.com/ewha.chain/" target="_blank" className="logo"><img alt="instagram" src={Instagram}/></a>
        </div>
      </div>

    </footer>
  )
}

export default Footer