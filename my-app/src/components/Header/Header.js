import React from 'react';
import './Header.css';
import SearchIcon from '/Users/nihalmahansaria/Desktop/CommunityConnect/my-app/src/components/icons/SearchIcon.png'; // Example path to icon
import BrightnessIcon from '/Users/nihalmahansaria/Desktop/CommunityConnect/my-app/src/components/icons/BrightnessIcon.png'; // Example path to icon
import UserIcon from '/Users/nihalmahansaria/Desktop/CommunityConnect/my-app/src/components/icons/UserIcon.png'; // Example path to icon

function Header() {
  return (
    <header className="header">
      <div className="icons">
        <img src={SearchIcon} alt="Search" />
        <img src={BrightnessIcon} alt="Brightness" />
      </div>
      <div className="navigation">
        <a href="/">Home</a>
        <a href="/store">Store</a>
        <a href="/blog">Blog</a>
      </div>
      <div className="login-register">
        <img src={UserIcon} alt="User" />
        <div>
          <a href="/login">Login</a>
          <span>/</span>
          <a href="/register">Register</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
