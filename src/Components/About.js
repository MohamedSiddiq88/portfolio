import React, { useEffect, useRef, useState } from 'react';
import "../App.css"
import Chat from './chat/Chat';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const chatData = [
    {
      question: "Hello, could you tell me a bit about yourself?",
      answer: "Hello! I'm Mohamed Siddiq, an enthusiastic learner and aspiring MERN stack developer."
    },
    {
      question: "What inspired you to start your coding journey?",
      answer: "I've always been passionate about crafting simple and effective web applications."
    },
    {
      question: "What technologies have you been working with?",
      answer: "I've been diving into projects that allow me to practice both front-end and back-end development. I've become familiar with technologies like React, Node.js, Express.js, and MongoDB."
    },
    {
      question: "How do you stay up-to-date with the tech landscape?",
      answer: "Learning is a constant in my life, and I'm committed to staying up-to-date with the ever-evolving tech landscape."
    },
    {
      question: "Are you open to collaboration?",
      answer: "Absolutely! If you're interested in connecting or collaborating, don't hesitate to get in touch with me."
    },
    {
      question: "What excites you about the future of web development?",
      answer: "I'm excited about taking on new challenges, learning from them, and building meaningful solutions."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1}
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <div className='about'     id="about"
    
     >
      <div className="container">
        <h2>About Me</h2>
        {/* <div className="chat">
      <div className={`question_container ${isVisible?'animate':'hide'}`} ref={aboutRef}>
      <div className="question">Hello, could you tell me a bit about yourself?</div>
      <img src="https://img.freepik.com/free-psd/girl-avatar-emoji-3d-icon_23-2150579864.jpg?t=st=1708756498~exp=1708760098~hmac=e39c93b368d49b9092d9a10d65017f7547e50eb55c4aaf0777a0a20d6237025b&w=740" alt="User Avatar" className="question_avatar" />
      </div>
      <div className='answer_container'>
      <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1708732800&semt=ais" alt="User Avatar" className="answer_avatar" />
      <div className="answer">Hello! I'm Mohamed Siddiq, an enthusiastic learner and aspiring MERN stack developer.</div>
      </div>
    </div>

    <div className="chat">
      <div className={`question_container ${isVisible?'animate':'hide'}`} ref={aboutRef}>
      <div className="question">What inspired you to start your coding journey?</div>
      <img src="https://img.freepik.com/free-psd/girl-avatar-emoji-3d-icon_23-2150579864.jpg?t=st=1708756498~exp=1708760098~hmac=e39c93b368d49b9092d9a10d65017f7547e50eb55c4aaf0777a0a20d6237025b&w=740" alt="User Avatar" className="question_avatar" />
      </div>
      <div className='answer_container'>
      <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1708732800&semt=ais" alt="User Avatar" className="answer_avatar" />
      <div className="answer">I've always been passionate about crafting simple and effective web applications.</div>
      </div>
    </div>

    <div className="chat">
      <div className={`question_container ${isVisible?'animate':'hide'}`} ref={aboutRef}>
      <div className="question">What technologies have you been working with?</div>
      <img src="https://img.freepik.com/free-psd/girl-avatar-emoji-3d-icon_23-2150579864.jpg?t=st=1708756498~exp=1708760098~hmac=e39c93b368d49b9092d9a10d65017f7547e50eb55c4aaf0777a0a20d6237025b&w=740" alt="User Avatar" className="question_avatar" />
      </div>
      <div className='answer_container'>
      <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1708732800&semt=ais" alt="User Avatar" className="answer_avatar" />
      <div className="answer">I've been diving into projects that allow me to practice both front-end and back-end development. I've become familiar with technologies like React, Node.js, Express.js, and MongoDB.</div>
      </div>
    </div>

    <div className="chat">
      <div className={`question_container ${isVisible?'animate':'hide'}`} ref={aboutRef}>
      <div className="question">How do you stay up-to-date with the tech landscape?</div>
      <img src="https://img.freepik.com/free-psd/girl-avatar-emoji-3d-icon_23-2150579864.jpg?t=st=1708756498~exp=1708760098~hmac=e39c93b368d49b9092d9a10d65017f7547e50eb55c4aaf0777a0a20d6237025b&w=740" alt="User Avatar" className="question_avatar" />
      </div>
      <div className='answer_container'>
      <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1708732800&semt=ais" alt="User Avatar" className="answer_avatar" />
      <div className="answer">Learning is a constant in my life, and I'm committed to staying up-to-date with the ever-evolving tech landscape.</div>
      </div>
    </div>

    <div className="chat">
      <div className={`question_container ${isVisible?'animate':'hide'}`} ref={aboutRef}>
      <div className="question">Are you open to collaboration?</div>
      <img src="https://img.freepik.com/free-psd/girl-avatar-emoji-3d-icon_23-2150579864.jpg?t=st=1708756498~exp=1708760098~hmac=e39c93b368d49b9092d9a10d65017f7547e50eb55c4aaf0777a0a20d6237025b&w=740" alt="User Avatar" className="question_avatar" />
      </div>
      <div className='answer_container'>
      <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1708732800&semt=ais" alt="User Avatar" className="answer_avatar" />
      <div className="answer">Absolutely! If you're interested in connecting or collaborating, don't hesitate to get in touch with me.</div>
      </div> 
    </div>

    <div className="chat">
      <div className={`question_container ${isVisible?'animate':'hide'}`} ref={aboutRef}>
      <div className="question">What excites you about the future of web development?</div>
      <img src="https://img.freepik.com/free-psd/girl-avatar-emoji-3d-icon_23-2150579864.jpg?t=st=1708756498~exp=1708760098~hmac=e39c93b368d49b9092d9a10d65017f7547e50eb55c4aaf0777a0a20d6237025b&w=740" alt="User Avatar" className="question_avatar" />
      </div>
      <div className='answer_container'>
      <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1708732800&semt=ais" alt="User Avatar" className="answer_avatar" />
      <div className="answer">I'm excited about taking on new challenges, learning from them, and building meaningful solutions.</div>
      </div>
    </div> */}
    {chatData.map((chat, index) => (
            <Chat
            index={index}
            chat={chat}
            isVisible={isVisible}
            aboutRef={aboutRef}
            ></Chat>
          ))}
      </div>
    </div>
  );
};

export default About;
