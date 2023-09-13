

import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Base from '../Base/Base';
import Skills from './Skills';

const MainPage = () => {
  return (
    <div>
      <Base>
      <Home />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      </Base>
      <div className='view-port-msg'>please rotate your device</div>
    </div>
  );
};

export default MainPage;
