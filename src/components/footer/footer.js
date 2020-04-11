import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-btns-container">
        <button className="footer-btn">About</button>      
        <button className="footer-btn">Customer service</button>
        <button className="footer-btn">Newsletter</button>
      </div>
      <hr className="line"></hr>
      <p className="copyright">&copy; 2020 Matej Mik. All rights reserved.</p>
    </div>
  );
}

export default Footer;