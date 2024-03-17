import React from 'react';
import './Header.css'; // Make sure you link the CSS file correctly

const Header = () => {
    return (
        <header className="header">
            <div className="header__search">
                <input type="search" placeholder="Search..." />
                <button type="submit">
                    {/* You can include a search icon here */}
                </button>
            </div>
            <div className="header__logo">
                CommunityConnect
            </div>
            <nav className="header__nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/store">Store</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </nav>
            <div className="header__actions">
                <button className="theme-toggle">
                    {/* Insert brightness icon here */}
                </button>
                <button className="login-button">
                    Login/Register
                </button>
            </div>
        </header>
    );
};

export default Header;
