import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <input type="search" placeholder="Search" className="search-bar"/>
      { /* Insert your search and brightness icons here */ }
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/store">Store</a>
        <a href="/blog">Blog</a>
        <button className="login-btn">Login/Register</button>
      </div>
    </header>
  );
}

export default Header;
