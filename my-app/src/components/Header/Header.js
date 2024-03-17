import React from 'react';
import './Header.css';
import SearchIcon from '/Users/nihalmahansaria/Desktop/CommunityConnect/my-app/src/components/icons/SearchIcon.png'; // Example path to icon
import BrightnessIcon from '/Users/nihalmahansaria/Desktop/CommunityConnect/my-app/src/components/icons/BrightnessIcon.png'; // Example path to icon
import UserIcon from '/Users/nihalmahansaria/Desktop/CommunityConnect/my-app/src/components/icons/UserIcon.png'; // Example path to icon

function Header() {
    return (
      <header className="header">
        <div className="icon-container">
          <img src={searchIcon} alt="Search" className="icon" />
          <img src={brightnessIcon} alt="Brightness" className="icon" />
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Store</a>
          <a href="#" className="nav-link">Blog</a>
        </nav>
        <div className="user-section">
          <img src={userIcon} alt="User" className="icon" />
          <div className="login-register">
            <a href="#" className="login">Login</a>
            <span className="slash">/</span>
            <a href="#" className="register">Register</a>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;