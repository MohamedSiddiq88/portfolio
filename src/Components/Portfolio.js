import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import project1Image from '../Images/pizza.png';
import project2Image from '../Images/zoom.png';
import project3Image from '../Images/urlshortner.png';
import project4Image from '../Images/piano.png';
import project5Image from '../Images/snake.png';
import project6Image from '../Images/calculator.png';
import project7Image from '../Images/management.png';
import project8Image from '../Images/emojihub.png';
import project9Image from '../Images/rick.png';



const Portfolio = () => {
  const [windowWidth, setWindowWidth] = useState(window.visualViewport.width);
  const [readMore, setReadMore] = useState(true);

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
      name: 'Snake game',
      description: 'Created a Snake Game with user sign-in, emphasizing user-friendly gaming sessions and score tracking.',
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/project3-snake-game-',
      githubBackendLink: 'https://github.com/MohamedSiddiq88/project3-backend/tree/main',
      frontendLink: 'https://zesty-daifuku-cda52b.netlify.app/',
      backendLink: 'https://project3-backend-d1f6.onrender.com/',
      technologies: [
        "React",
        "Express.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 5",
        "Node.js",
        "MongoDB",
        "React Router",
      ]

    }, {
      id: 2,
      image: project1Image,
      name: 'Student and Teacher Profile Management System',
      description: 'Built a streamlined Student and Teacher Profile Management System, enhancing educational administration.',
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/project2',
      githubBackendLink: 'https://github.com/MohamedSiddiq88/project2-backend',
      frontendLink: 'https://capable-kitten-46b122.netlify.app/',
      backendLink: '',
      technologies: [
        "React",
        "Express.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 5",
        "Node.js",
        "MongoDB",
        "React Router",
      ]

    }, {
      id: 3,
      image: project1Image,
      name: 'E-commerce Platform',
      description: 'Created an e-commerce platform with cart management, focusing on a user-friendly design.',
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/shop-project1-',
      githubBackendLink: 'https://github.com/MohamedSiddiq88/project1-backend/tree/main',
      frontendLink: 'https://glowing-biscuit-72830c.netlify.app/',
      backendLink: '',
      technologies: [
        "React",
        "Express.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 5",
        "Node.js",
        "MongoDB",
        "React Router",
      ]

    },
    {
      id: 4,
      image: project1Image,
      name: 'Pizza Delivery',
      description: 'Developed an online pizza ordering platform with user-friendly customization and order processing for a convenient dining experience.',
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/pizza-delivery/tree/webcode',
      githubBackendLink: 'https://github.com/MohamedSiddiq88/pizza-express',
      frontendLink: 'https://ornate-duckanoo-99a24c.netlify.app',
      backendLink: 'https://pizza-express-rho.vercel.app/',
      technologies: [
        "React",
        "Express.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 5",
        "Node.js",
        "MongoDB",
        "React Router",
        "Razorpay API",
      ]

    }, {
      id: 5,
      image: project9Image,
      name: 'The Rick and Morty',
      description: "Created a dynamic 'Rick and Morty' character viewer with a user-friendly interface, offering an engaging and informative experience for fans of the show.",
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/ricky-and-morty',
      githubBackendLink: '',
      frontendLink: 'https://neon-griffin-262d6d.netlify.app/',
      backendLink: '',
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 4.6.2",
        "Rick and Morty API",
      ]
    }, {
      id: 6,
      image: project8Image,
      name: 'Emoji Hub',
      description: "Built Emoji Hub, a user-friendly emoji discovery and sharing platform for enhanced messaging and online interactions.",
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/emoji-hub',
      githubBackendLink: '',
      frontendLink: 'https://lucky-moxie-b7d6c8.netlify.app/',
      backendLink: '',
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Express.js",
        "React",
        "MongoDB",
        "Bootstrap 5",
        "EmojiHub API"
      ]
    },

  ];


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.visualViewport.width);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className='row'>
          <h2>My Latest Projects</h2>
          {/* <Slider {...settings}>
          {projects.map((project) => (
            <div className="project-container" key={project.id}>
              <div className="row">
                <div className="col project-image-col">
                  <div className="project-image">
                    <img src={project.image} alt={project.name} className="img-fluid" />
                  </div>
                </div>
                <div className="col details-container">
                  <div className="project-details">
                    <div className='container-fluid'>
                    <div className='row'>
                    <h3>{project.name}</h3>
                    <p>{(windowWidth)<800?(readMore?<>{project.description.slice(0,150)}<span className='read-more' onClick={()=>setReadMore(!readMore)}>...Read More</span></>:<>{project.description}<span className='read-more' onClick={()=>setReadMore(!readMore)}>less</span></>):<>{project.description}</>}</p>
                    
                    </div>
                    <div className='row'>
                    <div className='col-lg-3'>
                    <div className="github-links">
                      <h3>GitHub:</h3>
                      <ul>
                        <li><a href={project.githubFrontendLink} target="_blank">Front-end</a></li>
                        {project.githubBackendLink!==""?<li><a href={project.githubBackendLink} target="_blank">Back-end</a></li>:null}
                      </ul>
                    </div>
                    <div className="deployed-links">
                      <h3>Deployed:</h3>
                      <ul>
                        <li><a href={project.frontendLink} target="_blank">Front-end</a></li>
                        {project.backendLink!==""?<li><a href={project.backendLink} target="_blank">Back-end</a></li>:null}
                        
                      </ul>
                    </div>
                    </div>

                    <div className='col'>
                      <h3>Technologies</h3>
                      <div className='technology-list'>
                      {project.technologies.map((ele,ind)=>(
                        <div key={ind} className='technology-btn'>{ele}</div>
                      ))}
                      </div>
                    </div>

                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider> */}
          {projects.map((project) => (
            <div className="col-lg-4 project-container" key={project.id}>
              <div className="row">
                {/* <div className="col project-image-col">
                  <div className="project-image">
                    <img src={project.image} alt={project.name} className="img-fluid" />
                  </div>
                </div> */}
                <div className="col details-container">
                  <div className="project-details">
                    <div className='container-fluid'>
                      <div className='row'>
                        <h4>{project.name}</h4>
                        <p>{(windowWidth) < 800 ? (readMore ? <>{project.description.slice(0, 150)}<span className='read-more' onClick={() => setReadMore(!readMore)}>...Read More</span></> : <>{project.description}<span className='read-more' onClick={() => setReadMore(!readMore)}>less</span></>) : <>{project.description}</>}</p>
                        {/* <p>{project.description.slice(0,150)}</p>  */}
                      </div>
                      <div className='row'>
                        <div className='col'>
                          <div className="github-links">
                            <h5>GitHub:</h5>
                            <ul>
                              <li><a href={project.githubFrontendLink} target="_blank">Front-end</a></li>
                              {project.githubBackendLink !== "" ? <li><a href={project.githubBackendLink} target="_blank">Back-end</a></li> : null}
                            </ul>
                          </div>

                        </div>
                        <div className="col deployed-links">
                          {/* <h5>Deployed:</h5>
                      <ul>
                        <li><a href={project.frontendLink} target="_blank">Front-end</a></li>
                        {project.backendLink!==""?<li><a href={project.backendLink} target="_blank">Back-end</a></li>:null}
                        
                      </ul> */}
                          <h5>Deployed:</h5>
                          <div>
                            <a href={project.frontendLink} target="_blank">
                              <button className='btn btn-outline-primary'>Demo</button>
                            </a>
                          </div>

                        </div>


                      </div>
                      <div className='row'>
                        <div className='col'>
                          <h5>Technologies</h5>
                          <div className='technology-list'>
                            {project.technologies.map((ele, ind) => (
                              <div key={ind} className='technology-btn'>{ele}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
