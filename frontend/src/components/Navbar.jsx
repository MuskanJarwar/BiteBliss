import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <Logo className="navbar-logo" />
      <span className="navbar-title">BiteBliss</span>
    </div>
    <ul className="navbar-center">
      <li><a href="#home">home</a></li>
      <li><a href="#menu">menu</a></li>
      <li><a href="#mobile-app">mobile app</a></li>
      <li><a href="#contact">contact us</a></li>
    </ul>
    <div className="navbar-right">
      <button className="navbar-icon search" aria-label="search">
        <span role="img" aria-label="search">🔍</span>
      </button>
      <button className="navbar-icon cart" aria-label="cart">
        <span role="img" aria-label="cart">🛒</span>
      </button>
      <button className="navbar-signin">sign in</button>
    </div>
  </nav>
);

export default Navbar; 