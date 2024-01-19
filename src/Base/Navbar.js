import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logoImage from './my-logo.png'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


 
  useEffect(()=>{
    function resizehandle(){
      setIsNavOpen(false);
    }
    window.addEventListener('resize',resizehandle);

    return()=>{
      window.removeEventListener('resize',resizehandle);
    }

  },[])

  return (
    <nav className={`navbar navbar-expand-lg  ${isNavOpen ? 'navbar-open' : ''}`}>
      <div className="container ">
        <Link to="home" smooth={true} duration={500} className="navbar-brand">
        <img src={logoImage} alt="Logo" className="logo-image" />
        </Link>
        <button
          className={`navbar-toggler navbar-dark  ${isNavOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} `}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <a 
              className='nav-link resume-a'
              href="https://drive.google.com/file/d/1HaTLxEM3vgglOTlhJQOSxFP03mtDlQkg/view?usp=sharing" 
              target="_blank"
              >Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
