
import { useState } from "react";
import "./works.scss";
import Card from '../../Card'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  const data = [
    
    

    {
      id: 4,
      icon: "../assets/react.png",
      title:"A Business Consultation Website", 
      img: "../assets/aria.png",
      desc: " A Business  Consultation website. Built with React, Material UI, HTML, CSS.",
      link: "https://aria-g-prog.vercel.app/",
      github: "https://github.com/g-prog/joblisting"

  },

  

    {
      id: 1,
      icon: "../assets/react.png",
      title:"Job Application Web App", 
      img: "../assets/findjobs.png",
      desc: " I built two mock API's for this web app, I utilized the API's in creating a project where users can search for jobs, view and apply for jobs and  I also created an admin section where users can post, edit and delete a job entry. Built with React, Material UI, Tailwind CSS.",
      link: "https://tedbree.vercel.app/",
      github: "https://github.com/g-prog/tedbree"

  },

    {
      id: 2,
      icon: "../assets/react.png",
      title:"Bookings/Travel Website", 
      img: "../assets/search2.png",
      desc: " I set up a Nodejs server using the Strapi CMS and utilized the REST API's generated therein in the frontend using a combination of Axios, React hooks to build a web application where users can view available destinations from an API, seach for destinations and book destinations.",
      link: "https://github.com/g-prog/Ethical-Solutions-3",
      github: "https://github.com/g-prog/Ethical-Solutions-3"

  },
  {
    id: 6,
    icon: "../assets/react.png",
    title:"Movie Search App", 
    img: "../assets/movies.png",
    desc: " I utilized the OMDBAPI to build a web app where users can search for all Batman movie categories. Built with React hooks and Styled components",
    link: "https://movies-g-prog.vercel.app/",
    github: "https://github.com/g-prog/movies"

  },

  {
    id: 7,
    icon: "../assets/react.png",
    title:"My Portfolio Website", 
    img: "../assets/mines.png",
    desc: " I built my Portfolio website to better display my projects as a Front End Developer. Built with React hooks, HTML, SCSS",
    link: "https://alao-adebukola.vercel.app/",
    github: "https://github.com/g-prog/alao-adebukola"

  },
  {
    id: 6,
    icon: "../assets/react.png",
    title:"React Form Validation App", 
    img: "../assets/movies.png",
    desc: " Currently working on learning how to validate forms using pure React without any external libraries. Built with React hooks, HTML, CSS",
    link: "https://react-form-validation-view-g-prog.vercel.app",
    github: "https://github.com/g-prog/react-form-validation"

  },
    {
        id: 3,
        icon: "../assets/react.png",
        title:"Meck App", 
        img: "../assets/meck.png",
        desc: "Built with  React.js, Tailwind CSS, Material UI, SASS, HTML and CSS. I utilized the Geolocation API to access the user's location, and the useState  hook to render contents dynamically and react toastify to create toast notifications.",
        link: "https://health-nine.vercel.app/",
        github: "https://github.com/g-prog/meck"

    },

    {
      id: 5,
      icon: "../assets/react.png",
      title:"Vasiti Website", 
      img: "../assets/vasiti.png",
      desc: "I was inspired by the Vasiti.com website. I used CSS Flexbox to make it responsive on mobile devices.  Currently working on its tablet responsiveness. Built with the help of React.js, Tailwind CSS,SASS, HTML, CSS.",
      link: "https://template-nine-xi.vercel.app/",
      github: "https://github.com/g-prog/template"

  },

    

    

    

    

  ];


  
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
 
 
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <div className="description">
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    

                  </div>
                  <div className="bottom">
                    <span><a href={d.link}><p>Hosted Project</p></a></span>
                    <span><a href={d.github}><p>Github</p></a></span>

                  </div>
                 
                  
                  
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/right.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/right.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />


<div className="mobile-display">
           
{data.map((d) => (
  
  <Card key={d.id}
    src={d.img}
    title={d.title}
    description={d.desc}
    link={d.link} 
    github={d.github}
  />
  ))}   

</div>


           


     

      
    </div>
  );
}
