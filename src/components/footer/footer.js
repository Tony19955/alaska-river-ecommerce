import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

import { ReactComponent as Facebook } from '../../assets/facebook_icon.svg'; 
import { ReactComponent as Instagram } from '../../assets/instagram_icon.svg'; 
import { ReactComponent as Pinterest } from '../../assets/pinterest_icon.svg'; 
import { ReactComponent as YouTube } from '../../assets/youtube_icon.svg'; 

function Footer() {
  return (
    <div className="footer-container">

      <div className="footer-sections-container">

        <div className="footer-section">
          <h3 className="footer-section-title">About</h3>
          <Link className="footer-link" to='/shop'>
            Our story          
          </Link>
          <Link className="footer-link" to='/shop'>
            Privacy Policy        
          </Link>
          <Link className="footer-link" to='/shop'>
            Terms & Conditions            
          </Link>
          <Link className="footer-link" to='/shop'>
            Cookie Policy            
          </Link>
        </div>

        <div className="footer-section"> 
          <h3 className="footer-section-title">Customer service</h3>
          <Link className="footer-link" to='/shop'>
            Shipping         
          </Link>
          <Link className="footer-link" to='/shop'>
            Returns       
          </Link>
          <Link className="footer-link" to='/shop'>
            Size guide            
          </Link>
          <Link className="footer-link" to='/shop'>
            Contact us         
          </Link>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-section-title">Newsletter</h3>
          <p className="footer-p">Sign up to receive email updates on special promotions, new product 
          announcements, gifts ideas and more.</p>
          <form className="newsletter-form">
            <input
              className="newsletter-input"
              type="email"
              name="email"
              placeholder="E-mail address"           
              required
            />
            <button className="newsletter-btn" type="submit">Subscribe</button>
          </form>
        </div>

        <div className="social-section">
          <Facebook className="social-icon" />
          <Instagram className="social-icon" />
          <Pinterest className="social-icon" />
          <YouTube className="social-icon" />
        </div>
      
      </div>

      <hr className="line"></hr>
      <p className="copyright">&copy; 2020 Matej Mik. All rights reserved.</p>
    </div>
  );
}

export default Footer;