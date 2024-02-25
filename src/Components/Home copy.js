

import React from 'react';
import profileImage from '../Images/passport size phone (1)(1).png';
import "../App.css"

const Home = () => {
  return (
    
    <div className="home" id="home">
      <div className="container">
        <div className="row align-items-center image-container-row">
          <div className="col-lg-6">
            <h1>Welcome to My Portfolio</h1>
            <h3 className="lead">Hi, I'm Mohamed Siddiq, a MERN stack developer.</h3>
            <a href='mailto:diddiq88@gmail.com'>
              <i class="fa-solid fa-envelope contact-icon"></i>
              </a>
            <a href="https://linkedin.com/in/mohamed-siddiq-4a512716b" target='_blank'>
                  <i class="fa-brands fa-linkedin contact-icon"></i>
                  </a>
                  <a href="https://github.com/MohamedSiddiq88" target='_blank'>
                    <i class="fa-brands fa-github contact-icon"></i>
                  </a>
          </div>
          <div className="col-lg-5 col">
            <div className='image-container'>
            <img src={profileImage} alt="Profile" className="img-fluid profile-image" />
            <div className='over'>
            <img src={profileImage} alt="Profile" className="img-fluid profile-image1"/>
              
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
