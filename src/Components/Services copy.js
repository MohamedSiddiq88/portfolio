// In pages/Services.js

import React from 'react';
import uix from '../Images/uix.png';

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <h2>My Services</h2>
        <div className='row'>
          <div className='col'>
          <p>Here are the services I offer as a MERN stack developer:</p>
        <ul>
          <li>Full-stack web development</li>
          <li>Front-end development with React</li>
          <li>Back-end development with Node.js and Express</li>
          <li>Database design and management with MongoDB</li>
          <li>RESTful API development</li>
          <li>Responsive web design</li>
          <li>Deployment and hosting of web applications</li>
          <li>Code optimization and performance tuning</li>
        </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
