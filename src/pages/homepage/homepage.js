import React from 'react';
import Directory from '../../components/directory/directory';
import './homepage.scss';

const HomePage = () => (
  <div className="homepage"> 
    <div className="homepage-banner">
      <h1 className="homepage-collection-title">Mountain Heat
      <br />
      <p>New arrivals</p>
      </h1>
      <button className="homepage-shop-btn">Explore collection</button>
    </div>
    <h1 className="homepage-categories">Shop Yours</h1>
    <Directory />
  </div>
);

export default HomePage;