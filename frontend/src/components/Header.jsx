import React from 'react';
import './Header.css';
import headerImg from '../assets/header_img.png';

const Header = () => (
  <header
    className="hero-header"
    style={{ backgroundImage: `url(${headerImg})` }}
  >
    <div className="hero-content">
      <h1>Order your<br /><span>favourite food here</span></h1>
      <p>
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <button className="hero-btn">View Menu</button>
    </div>
  </header>
);

export default Header; 