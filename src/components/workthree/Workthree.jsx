import { useState } from "react";
import "./workthree.scss";
import Card from '../../Card'

export default function Workthree() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [

    {
      id: 1,
      icon: "../assets/react.png",
      title:"Podcast Player", 
      img: "../assets/bandp.png",
      desc: " I built  the Play, Pause, Previous and Next functionalities typical of music/podcast players. I built this with Vanilla Javascript, HTML and CSS, I also utilized Font-awesome CDN. I am currently working on its mobile-responsiveness.",
      link: "https://infallible-mcclintock-d02178.netlify.app/",
      github: "https://github.com/g-prog/podcast-player"

  },

  {
        id: 2,
        icon: "../assets/html.jpg",
        title:"Web Application hooked with Firebase backend", 
        img: "../assets/lombaz.png",
        desc: "Built with HTML and CSS, Vanilla JavaScript. Firebase. User data can be sent to firebase backend. It is completely mobile responsive.",
        link: "https://lombaz-g-prog.vercel.app/",
        github: "https://github.com/g-prog/lombaz"



    },
    {
        id: 3,
        icon: "../assets/html.jpg",
        title:"Static Landing Page", 
        img: "../assets/static.png",
        desc: "Built with Bootstrap, HTML and CSS",
        link: "https://eager-blackwell-af8aab.netlify.app/",
        github: "https://github.com/g-prog/abcdlanding"



    },

    {
        id: 4,
        icon: "../assets/html.jpg",
        title:"Static Header Section", 
        img: "../assets/agriculture.png",
        desc: "Built with HTML and CSS",
        link: "https://epic-roentgen-ef0d7a.netlify.app/",
        github: "https://github.com/g-prog/abcdlanding"



    },


    {
        id: 5,
        icon: "../assets/html.jpg",
        title:"Outer Space CSS Animations", 
        img: "../assets/stars.png",
        desc: "Built with HTML, CSS and Next.js. ",
        link: "https://next-i5wrqdji3-g-prog.vercel.app/trial",
        github: "https://github.com/g-prog/next"

    },

    
    

    

  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="workthree" id="workthree">
      
      
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


          <div className="mobile-display">
          {data.map((f) => (
            <Card
                    src={f.img}
                    title={f.title}
                    description={f.desc}
                    link={f.link}
                    github={f.github}
                    

                 />
                 ))}
         
          </div>

      
    </div>
  );
}
