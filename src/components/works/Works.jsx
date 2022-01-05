
import { useState } from "react";
import "./works.scss";

export default function Works() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [

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
      desc: " I set up a Nodejs server using the Strapi  and utilized the REST API's generated therein in the frontend using a combination of Axios, React hooks to build a web application where users can view available destinations from an API, seach for destinations and book destinations.",
      link: "https://github.com/g-prog/Ethical-Solutions-3",
      github: "https://github.com/g-prog/Ethical-Solutions-3"

  },
    {
        id: 2,
        icon: "../assets/react.png",
        title:"Meck App", 
        img: "../assets/meck.png",
        desc: "Built with  React.js, Tailwind CSS, Material UI, SASS, HTML and CSS. I utilized the Geolocation API to access the user's location, and the useState  hook to render contents dynamically and react toastify to create toast notifications.",
        link: "https://health-nine.vercel.app/",
        github: "https://github.com/g-prog/meck"

    },

    

    {
        id: 4,
        icon: "../assets/react.png",
        title:"ABCD Website", 
        img: "../assets/abcd.png",
        desc: "Built the About page section of the ABCD website with the help of  Tailwind CSS,  HTML, CSS and Next.js.",
        link: "https://abcd-website.vercel.app/about",
        github: "https://github.com/FayVik/abcd-website"



    },

    {
        id: 5,
        icon: "../assets/react.png",
        title:"Vasiti Website", 
        img: "../assets/vasiti.png",
        desc: "I was inspired by the Vasiti.com website. Built with the help of React.js, Tailwind CSS,SASS, HTML, CSS.",
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
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href={d.link}><p>Hosted Project</p></a></span>
                  <span><a href={d.github}><p>Github</p></a></span>
                  
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




      
    </div>
  );
}
