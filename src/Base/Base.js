import React from 'react';
import Navbar from './Navbar';

const Base = ({ children }) => {
  return (
    <div className='base'>
      <Navbar />
      <div className="container-fluid">
        {children}
      </div>
      <footer className="footer">
        <div>Copyright © 2023</div>
      </footer>
    </div>
  );
};

export default Base;
