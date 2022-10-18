import React from "react";
import "./footer.css";
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return <footer>
    <a href="#" className="footer__logo">Persional Portfolio</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Skills</a></li>
      {/* <li><a href="#services">Service</a></li> */}
      <li><a href="#portfolio">Portfolio</a></li>
      {/* <li><a href="#testimonial">Testimonials</a></li> */}
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.facebook.com/harsh.pandey.92505"><FaFacebookF/></a>
      <a href="https://www.instagram.com/_.h.a.rs.h_/"><FiInstagram/></a>
      <a href="https://twitter.com/Harsh2060"><IoLogoTwitter/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Harsh Pandey. All rights reserved</small>
    </div>
  </footer>;
};

export default Footer;
