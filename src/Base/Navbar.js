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
              <div className='link'>

              </div>
        <button
          className={`navbar-toggler navbar-dark  ${isNavOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''} `}>
<div>
<ul className="navbar-nav ml-auto">
            <li className="nav-item">
            
              <div className='link'>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Home
              </Link>
              </div>
            </li>
            <li className="nav-item">
              
              <div className='link'>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                About
              </Link>
              </div>
            </li>
            <li className="nav-item">
              
              <div className='link'>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Skills
              </Link>
              </div>
            </li>
            <li className="nav-item">
              
              <div className='link'>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Services
              </Link>
              </div>
            </li>
            <li className="nav-item">
              
              <div className='link'>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Projects
              </Link>
              </div>
              
            </li>
            <li className="nav-item">
              <div className='link'>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={toggleNav}
              >
                Contact
              </Link>
               </div>
            </li>
            <li className='nav-item'>
              <a 
              className='nav-link'
              href="https://drive.google.com/file/d/1DXcgzae8chHoEQ_XzFCSjJV1EnCdTs-z/view?usp=drive_link" 
              target="_blank"
              >
                <button className='btn btn-outline-light'>
                Resume <i class="fa-solid fa-file-lines"></i>
                </button>
              </a>
            </li>
          </ul>

</div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
