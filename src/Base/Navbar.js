import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${isNavOpen ? 'navbar-open' : ''}`}>
      <div className="container bg-dark">
        <Link to="home" smooth={true} duration={500} className="navbar-brand">
          My Portfolio
        </Link>
        <button
          className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`}
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
                Portfolio
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
