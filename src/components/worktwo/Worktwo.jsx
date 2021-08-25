
import { useState } from "react";
import "./worktwo.scss";

export default function Worktwo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    

    {
        id: 4,
        icon: "../assets/django.png",
        title:"Django Blog Website", 
        img: "../assets/w3.png",
        desc: "Built with the help of Django, Bootstrap, HTML, CSS. I implemented user authentication and rendered blog contents dynamically from the backend using django",
        link: "https://github.com/g-prog/second-django-project-website",
        github: "https://github.com/g-prog/second-django-project-website"

    },

    {
        id: 5,
        icon: "../assets/django.png",
        title:" E-commerce Website", 
        img: "../assets/pay.png",
        desc: "Built with the help of Django, Bootstrap, HTML, CSS, JavaScript. I implemented user authentication, used Paypal API's to implement payment and rendered cart items  dynamically using JavaScript.",
        link: "https://github.com/g-prog/second-django-project-website",
        github: "https://github.com/g-prog/second-django-project-website"

    },

    {
        id: 6,
        icon: "../assets/django.png",
        title:"Django Travel Website", 
        img: "../assets/travello2.jpg",
        desc: "Built with the help of Django, Bootstrap, HTML, CSS. I implemented user authentication and rendered travel contents dynamically using django",
        link: "https://github.com/g-prog/first_django-work",
        github: "https://github.com/g-prog/first_django-work"

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
                  
                  <span><a href={d.link}><p>Project</p></a></span>
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
