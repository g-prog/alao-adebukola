
import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
        id: 1,
        icon: "../assets/react.png",
        title:"Meck App", 
        img: "../assets/meck.png",
        desc: "Built with  React.js, Tailwind CSS, Material UI, SASS, HTML and CSS. I utilized the Geolocation API to access the user's location, and the useState  hook to render contents dynamically and react toastify to create toast notifications.",
        link: "https://health-nine.vercel.app/"

    },

    {
        id: 2,
        icon: "../assets/react.png",
        title:"ABCD Website", 
        img: "../assets/abcd.png",
        desc: "Built the About page section of the ABCD website with the help of React.js, Tailwind CSS, Material UI,  HTML and CSS and Next.js.",
        link: "https://abcd-website.vercel.app/about"



    },

    {
        id: 3,
        icon: "../assets/react.png",
        title:"Vasiti Website", 
        img: "../assets/vasiti.png",
        desc: "Built with the help of React.js, Tailwind CSS, Material UI, SASS, HTML, CSS.",
        link: "https://template-nine-xi.vercel.app/"

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
                  
                  <span><a href={d.link}>Link to Project</a></span>
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
