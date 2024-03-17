import React from 'react';
import './Footer.css'; // Make sure to create a Footer.css in the same directory as this file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {(new Date().getFullYear())} CommunityConnect. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
