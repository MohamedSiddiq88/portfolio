import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1Image from '../pizza-graphic-clipart-design-free-png.webp';
import project2Image from '../pizza-graphic-clipart-design-free-png.webp';
import project3Image from '../pizza-graphic-clipart-design-free-png.webp';


const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const projects = [
    {
      id: 1,
      image: project1Image,
      name: 'Pizza Delivery',
      description: 'Pizza Delivery is a web application that allows users to order pizzas online. It is built using Express.js for the backend, React for the frontend, and MongoDB for the database. The application provides a user-friendly interface for browsing through a variety of pizza options, customizing toppings, and placing orders. The backend handles the order processing and communicates with the database to store and retrieve order details. The frontend is built with React and styled using Bootstrap 5 to ensure a responsive and visually appealing design. Pizza Delivery offers a seamless and convenient way for users to satisfy their pizza cravings with just a few clicks!',
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/pizza-delivery/tree/webcode',
      githubBackendLink: 'https://github.com/MohamedSiddiq88/pizza-express',
      frontendLink: 'https://pizza-express-rho.vercel.app/',
      backendLink: 'https://ornate-duckanoo-99a24c.netlify.app',
    },
    {
      id: 2,
      image: project2Image,
      name: 'Pizza Delivery',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo, enim eget commodo rutrum.',
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/pizza-delivery/tree/webcode',
      githubBackendLink: 'https://github.com/MohamedSiddiq88/pizza-express',
      frontendLink: 'https://pizza-express-rho.vercel.app/',
      backendLink: 'https://ornate-duckanoo-99a24c.netlify.app',
    },
    {
      id: 3,
      image: project3Image,
      name: 'Pizza Delivery',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo, enim eget commodo rutrum.',
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/pizza-delivery/tree/webcode',
      githubBackendLink: 'https://github.com/MohamedSiddiq88/pizza-express',
      frontendLink: 'https://pizza-express-rho.vercel.app/',
      backendLink: 'https://ornate-duckanoo-99a24c.netlify.app',
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className='row'>
        <h2>My Latest Projects</h2>
        <Slider {...settings}>
          {projects.map((project) => (
            <div className="project-container" key={project.id}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="project-image">
                    <img src={project.image} alt={project.name} className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6 details-container">
                  <div className="project-details">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="github-links">
                      <h4>GitHub:</h4>
                      <ul>
                        <li><a href={project.githubFrontendLink} target="_blank">Frontend</a></li>
                        <li><a href={project.githubBackendLink} target="_blank">Backend</a></li>
                      </ul>
                    </div>
                    <div className="deployed-links">
                      <h4>Deployed:</h4>
                      <ul>
                        <li><a href={project.frontendLink} target="_blank">Frontend</a></li>
                        <li><a href={project.backendLink} target="_blank">Backend</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
