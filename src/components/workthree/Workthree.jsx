import { useState } from "react";
import "./workthree.scss";

export default function Workthree() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [

    {
      id: 1,
      icon: "../assets/html.jpg",
      title:"Logistics Website", 
      img: "../assets/abgees.png",
      desc: "A Logistics Website still in production",
      link: "https://eager-blackwell-af8aab.netlify.app/",
      github: "https://github.com/g-prog/abcdlanding"



  },
    {
        id: 2,
        icon: "../assets/html.jpg",
        title:"Static Landing Page", 
        img: "../assets/static.png",
        desc: "Built with Bootstrap, HTML and CSS",
        link: "https://eager-blackwell-af8aab.netlify.app/",
        github: "https://github.com/g-prog/abcdlanding"



    },

    {
        id: 3,
        icon: "../assets/html.jpg",
        title:"Static Header Section", 
        img: "../assets/agriculture.png",
        desc: "Built with HTML and CSS",
        link: "https://epic-roentgen-ef0d7a.netlify.app/",
        github: "https://github.com/g-prog/abcdlanding"



    },


    {
        id: 4,
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




      
    </div>
  );
}
