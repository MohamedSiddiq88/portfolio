// In components/Base.js

import React from 'react';
import Navbar from './Navbar';

const Base = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container">
        {children}
      </div>
      <footer className="text-center">
        {/* Add footer content here */}
      </footer>
    </div>
  );
};

export default Base;
