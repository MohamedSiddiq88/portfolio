

import React, { useEffect, useState } from 'react';
import profileImage from '../Images/siddiq.jpg';
import "../App.css"

const Home = () => {
  function sleep(ms) {
    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );
}
const phrases = ["Fullstack Developer", "Frontend Developer", "Backend Developer"];
// const el = document.getElementById("typewriter");
const [el,setEl]=useState("");

let sleepTime = 100;
let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true) {
        let curWord = phrases[curPhraseIndex];
        for (let i = 0; i <= curWord.length; i++) {
            setEl(curWord.slice(0, i));
            await sleep(100);
        }
        await sleep(1000); // Pause after typing a word
        curPhraseIndex = (curPhraseIndex + 1) % phrases.length;
    }
};

useEffect(()=>{
  writeLoop();
},[])
  return (
    
    <div className="home" id="home">
      <div className="container">
        <div className="row align-items-center image-container-row" >
          <div className="col-lg-6 col-md-6 home_text_contianer" >
            <h1>Hi, I am Mohamed Siddiq 👋</h1>
            <h1 className="pharase_contianer">{el}<span id="cursor">|</span></h1>
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
          <div className="col-lg-5 col-md-6" >
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
