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
  const [readMore,setReadMore]=useState(true);

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
      frontendLink: 'https://ornate-duckanoo-99a24c.netlify.app',
      backendLink: 'https://pizza-express-rho.vercel.app/',
      technologies:[
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

    },
    {
      id: 2,
      image: project2Image,
      name: 'Mera Zoom',
      description:'Mera Zoom is a robust web-based video conferencing application designed for seamless virtual meetings and collaboration. The project comprises a powerful frontend built using React, an efficient backend powered by Node.js, and utilizes MongoDB for data storage. This application empowers users to create or join meetings effortlessly, communicate via chat, and share screens in real-time. Zoom Clone offers an intuitive and secure platform for virtual gatherings, remote work, or professional meetings.',
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/zoom-clone-app',
      githubBackendLink: 'https://github.com/MohamedSiddiq88/Zoom-express/tree/main',
      frontendLink: 'https://incomparable-liger-0f8a0b.netlify.app/',
      backendLink: 'https://zoom-express.onrender.com/',
      technologies:[
        "React",
        "React Router",
        "Bootstrap 5",
        "Socket.IO Client",
        "uuid",
        "Node.js",
        "Express.js",
        "Socket.IO",
        "MongoDB",
        "Mongoose",
        "dotenv",
        "Cors",
        "http"
      ]
      

    },
    {
      id: 3,
      image: project3Image,
      name: 'URL Shortner',
      description:'The URL Shortening Service is a powerful web application designed for both simplicity and security. Using React.js for the frontend, Express.js for the backend, and MongoDB for data storage, this service empowers users to easily shorten and manage URLs. The user-friendly interface streamlines the process of shortening long links, while the dashboard offers insights into link performance. Robust security measures ensure user data remains protected. The URL Shortening Service simplifies URL management, making it effortless to create, track, and share links, making it an essential tool for optimizing online presence.',
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/shortner-app',
      githubBackendLink: 'https://github.com/MohamedSiddiq88/shortner-express---Copy/tree/main',
      frontendLink: 'https://chic-manatee-894f72.netlify.app/',
      backendLink: 'https://shortner-express-copy.vercel.app/',
      technologies:[
        "React.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 5",
        "React Router",
        "Shortid",
        "Cors",
      ]
      

    },{
      id: 4,
      image: project4Image,
      name: 'Piano',
      description:"React Piano is an enchanting web application that merges the world of music and technology seamlessly. It's crafted with React.js, making it a playground for both music enthusiasts and tech aficionados. The frontend, designed with React and styled using Bootstrap 5, offers an intuitive and visually captivating interface. Under the hood, sophisticated event handling, authentic sound playback, and responsive design create a harmonious piano-playing experience. This open-source project fosters collaboration on GitHub and paves the way for future enhancements. React Piano provides a captivating platform to create melodies, offering music lovers and developers alike a delightful blend of creativity and technology in every keystroke.",
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/piano',
      githubBackendLink: '',
      frontendLink: 'https://reliable-cocada-e03411.netlify.app/',
      backendLink: '',
      technologies:[
        "React",
        "HTML5",
        "CSS3",
        "JavaScript",
      ]
      

    },{
      id: 5,
      image: project5Image,
      name: 'Snake Mania',
      description:"Snake Mania is an immersive web-based gaming experience crafted with React. Players navigate a dynamic grid, controlling the snake's direction using arrow keys. The game offers multiple difficulty levels, from easy to hard, and features an adjustable volume setting. Snake Mania provides hours of classic gaming entertainment while challenging players to achieve their highest scores. It combines React for smooth interactivity, JavaScript for game logic, and HTML/CSS for dynamic visuals. Whether you're a casual gamer or a seasoned pro, Snake Mania guarantees a nostalgic and enjoyable gaming journey. Dive into the world of Snake Mania today and see how long you can grow your snake!",
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/snake_game',
      githubBackendLink: '',
      frontendLink: 'https://graceful-selkie-05c8f5.netlify.app/',
      backendLink: '',
      technologies:[
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "localStorage",
      ]
      

    },{
      id: 6,
      image: project6Image,
      name: 'Calculator Plus',
      description:"Calculator Plus is a sleek and user-friendly web application that combines style with functionality. Developed with HTML, CSS, and JavaScript, this calculator offers a minimalist and modern design, making it easy on the eyes. Users can perform basic arithmetic calculations, clear entries with a single click, and enjoy real-time results as they input expressions. The calculator also supports keyboard inputs for added convenience. With its interactive interface and accurate calculations, Calculator Plus provides a seamless way for users to perform quick computations, whether via mouse clicks or keyboard shortcuts. It's an elegant solution for all your calculation needs.",
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/19-03-2023-1',
      githubBackendLink: '',
      frontendLink: 'https://precious-froyo-a4984b.netlify.app/',
      backendLink: '',
      technologies:[
        "HTML5",
        "CSS3",
        "JavaScript",
        "Font Awesome Icons",
    ]
    },{
      id: 7,
      image: project7Image,
      name: 'The Student and Teacher Profile Management System',
      description:"The Student and Teacher Profile Management System is a comprehensive web application that simplifies the administration of student and teacher profiles. Utilizing React and React Router for the frontend, and the Monk API for data management, this system empowers users to effortlessly add, edit, and view profiles. The dashboard offers an informative summary of student and teacher counts. Users can seamlessly create new profiles, update existing ones, and remove unnecessary data. The system's responsive design ensures an optimal experience across various devices. In essence, this project is an intuitive solution for efficiently managing student and teacher information, enhancing educational administration.",
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/management-expand-app',
      githubBackendLink: '',
      frontendLink: 'https://dazzling-travesseiro-4bcc36.netlify.app/',
      backendLink: '',
      technologies:[
        "React",
        "React Router",
        "Monk API",
        "HTML5",
        "CSS3",
        "JavaScript"
      ]
      

    },{
      id: 8,
      image: project8Image,
      name: 'Emoji Hub',
      description:"Emoji Hub is an engaging web application designed to simplify emoji discovery and sharing. Developed with a powerful tech stack featuring Express.js, React, and MongoDB, this platform offers users a delightful experience. With its user-friendly interface, you can effortlessly explore a wide range of emojis, grouped by categories, and copy them with a single click. The backend efficiently manages order processing, while the frontend, styled with Bootstrap 5, ensures a responsive and attractive design. Emoji Hub makes expressing yourself with emojis easier than ever, providing a fun and convenient way to enhance your messaging and online interactions.",
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
    },{
      id: 9,
      image: project9Image,
      name: 'The Rick and Morty',
      description:"The Rick and Morty Character Viewer is a dynamic web application that immerses fans in the animated world of 'Rick and Morty.' With a blend of technical prowess and user-friendly design, this project offers a captivating experience. It harnesses HTML, CSS, and JavaScript for the interface, providing responsive design for seamless exploration on any device. Its pagination system effortlessly guides users through an ever-expanding character roster, while character cards reveal comprehensive details, including status indicators and first/last appearance locations. The project is not just a showcase of coding skills; it's a gateway for enthusiasts to dive deep into their favorite show's universe, offering an engaging and informative journey into 'Rick and Morty' lore.",
      githubFrontendLink: 'https://github.com/MohamedSiddiq88/ricky-and-morty',
      githubBackendLink: '',
      frontendLink: 'https://neon-griffin-262d6d.netlify.app/',
      backendLink: '',
      technologies:[
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap 4.6.2",
        "Rick and Morty API",
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
        <Slider {...settings}>
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
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
