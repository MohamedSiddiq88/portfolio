import React, { useEffect, useRef, useState } from 'react'

function SkillCard({ele,index}) {
    const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
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
    <div     className={`skill-img-content ${isVisible?'skill-card-animation':'hide'}`} ref={aboutRef}
    key={index}>
                <div className='skill-img'>
                <img src={ele.imgurl} style={ele.name=='Express' || ele.name=='NodeJS' || ele.name=='Bootstrap'?{backgroundColor:'white', padding:'0.1rem',borderRadius:'0.5rem'}:null}/>
                </div>
                <div className='skill-content'>
                {ele.name}
                </div>
            </div>
  )
}

export default SkillCard
