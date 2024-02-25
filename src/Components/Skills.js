import React, { useState } from 'react'
import SkillCard from './skillcard/SkillCard'

function Skills() {
    const[skillArr,setSkillArr]=useState([
        {
            name:"HTML",
            imgurl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        name:"CSS",
        imgurl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
}
        ,
        {
            name:"Javascript",
            imgurl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        name:"Mongo DB",
        imgurl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
},
{
    name:"NodeJS",
    imgurl:"https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
},
{
    name:"Express",
    imgurl:"https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
},
{
    name:"React",
    imgurl:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
},
{
    name:"Bootstrap",
    // imgurl:"https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg"
    imgurl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
},
{
    name:"Postman",
    imgurl:"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
},
{
    name:"Git",
    imgurl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
},
{
    name:"Reux Toolkit",
    imgurl:"https://cdn.worldvectorlogo.com/logos/redux.svg"
},
// {
//     name:"",
//     imgurl:""
// },
    ])
    
  return (
    <div className='skills' id="skills">
    <div className='container skills-main'>
        <div className='row'>
        <h2>Technologies and Tools</h2>
        </div>
        <div className='row'>
        <p>
    As a developer, I have experience with a diverse set of technologies and tools that help me build and deploy web applications efficiently. I'm proficient in core web technologies like HTML, CSS, and JavaScript, which form the foundation of any web project.
</p>
<p>
    I've also worked with modern web development libraries and frameworks such as React for building interactive user interfaces. My server-side skills include Node.js and Express, which enable me to create robust backend solutions. Additionally, I have experience with databases, specifically MongoDB, for managing data effectively.
</p>
<p>
    To ensure seamless collaboration and version control, I use Git, and I'm familiar with tools like Postman for testing APIs. I also leverage Bootstrap for responsive and visually appealing designs.
</p>
<p>
    My skill set allows me to develop end-to-end web applications, from designing user interfaces to implementing backend functionality and ensuring smooth deployment. I'm passionate about staying up-to-date with the latest web technologies to deliver high-quality software solutions.
</p>

        </div>
        <div className='row'>
            <div className='col'>
                <div className='skills-list'>
                {skillArr.map((ele,ind)=>(
            <SkillCard 
            ele={ele}
            index={ind}
            >
            </SkillCard>
        ))

        }
                </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Skills
