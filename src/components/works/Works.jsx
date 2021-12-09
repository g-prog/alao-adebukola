
import { useState } from "react";
import "./works.scss";

export default function Works() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [

    {
        id: 1,
        icon: "../assets/react.png",
        title:"Podcast Player", 
        img: "../assets/bandp.png",
        desc: "Not a React.js project but It was quite interesting putting this together. I built Play, Pause, Previous and Next functionalities. I built this with Vanilla Javascript, HTML and CSS, I also utilized Font-awesome CDN. I am currently working on its mobile-responsiveness.",
        link: "https://infallible-mcclintock-d02178.netlify.app/",
        github: "https://github.com/g-prog/podcast-player"

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
      id: 3,
      icon: "../assets/react.png",
      title:"Portfolio Website", 
      img: "../assets/mines.png",
      desc: "Built with React.js, Tailwind CSS, HTML, CSS. I utilized React hooks to make the navigation bar  and portfolio section reactive, I implemented snap-scrolling and built a carousel slider from scratch.",
      link: "https://alao-adebukola.vercel.app/#testimonials",
      github: "https://github.com/g-prog/alao-adebukola"

  },

    {
        id: 2,
        icon: "../assets/react.png",
        title:"ABCD Website", 
        img: "../assets/abcd.png",
        desc: "Built the About page section of the ABCD website with the help of  Tailwind CSS,  HTML, CSS and Next.js.",
        link: "https://abcd-website.vercel.app/about",
        github: "https://github.com/FayVik/abcd-website"



    },

    {
        id: 3,
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
