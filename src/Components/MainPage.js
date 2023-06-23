

import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Base from '../Base/Base';

const MainPage = () => {
  return (
    <div>
      <Base>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      </Base>
    </div>
  );
};

export default MainPage;
