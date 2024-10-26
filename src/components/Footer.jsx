// Footer.jsx
import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} NorahNaif. All rights reserved.</p>
        <p>Contact  at: Norahnaifal@hotmail.com</p>
      </div>
      <div className="footer-socials">
        <a href="https://x.com/norahnaifal?s=21" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://github.com/xnorahn2001" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
