// src/components/HomePageComponent.jsx
import React from 'react';
import './HomePageComponent.css';

const HomePageComponent = () => {
  return (
    <div className="home-page">
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="item" key={index}>
          <span>All pages</span>
          <input type="checkbox" className="custom-checkbox" defaultChecked={index % 2 === 0} />
        </div>
      ))}
    </div>
  );
};

export default HomePageComponent;
