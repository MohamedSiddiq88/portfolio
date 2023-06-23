

import React from 'react';
import profileImage from '../passport size phone.png';
import "../App.css"

const Home = () => {
  return (
    
    <div className="home" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1>Welcome to My Portfolio</h1>
            <p className="lead">Hi, I'm Mohamed Siddiq, a MERN stack developer.</p>
          </div>
          <div className="col-lg-5">
            <img src={profileImage} alt="Profile" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
