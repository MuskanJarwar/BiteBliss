import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook_icon.png';
import twitter from '../assets/twitter_icon.png';
import linkedin from '../assets/linkedin_icon.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left: Logo and description */}
        <div className="footer-col footer-brand">
          <div className="footer-logo-row">
            <img src={logo} alt="Logo" className="footer-logo" />
            <span className="footer-brand-name">BiteBliss</span>
          </div>
          <p className="footer-desc">
            BiteBliss is a modern food delivery web app demo project. This is a sample project for showcasing a beautiful, responsive food ordering experience using the MERN stack.
          </p>
          <div className="footer-socials">
            <a href="#"><img src={facebook} alt="Facebook" /></a>
            <a href="#"><img src={twitter} alt="Twitter" /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
          </div>
        </div>
        {/* Center: Company links */}
        <div className="footer-col footer-links">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>
        {/* Right: Contact info */}
        <div className="footer-col footer-contact">
          <h4>GET IN TOUCH</h4>
          <ul>
            <li>+1-212-4560-7890</li>
            <li>contact@greatstack.dev</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 