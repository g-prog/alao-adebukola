
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
        desc: "Built with the help of React.js, Tailwind CSS, Material UI, SASS, HTML and CSS. I utilized and implemented the Geolocation API, useState and useEffect hooks to access the user's location and make the contents dynamic. I also used react toastify to create toast notifications.",
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

    {
        id: 4,
        icon: "../assets/django.png",
        title:"Django Blog Website", 
        img: "../assets/w3.png",
        desc: "Built with the help of Django, Bootstrap, HTML, CSS. I implemented user authentication and rendered blog contents dynamically from the backend using django",
        link: "https://github.com/g-prog/second-django-project-website"

    },

    {
        id: 5,
        icon: "../assets/django.png",
        title:"Django E-commerce Website", 
        img: "../assets/pay.png",
        desc: "Built with the help of Django, Bootstrap, HTML, CSS, JavaScript. I implemented user authentication, used Paypal API's to implement payment and rendered cart items  dynamically using JavaScript.",
        link: "https://github.com/g-prog/second-django-project-website"

    },

    {
        id: 6,
        icon: "../assets/django.png",
        title:"Django Travel Website", 
        img: "../assets/travello2.jpg",
        desc: "Built with the help of Django, Bootstrap, HTML, CSS. I implemented user authentication and rendered cart items  dynamicall using JavaScript.",
        link: "https://github.com/g-prog/first_django-work"

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
                  <span>{d.link}</span>
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
        src="assets/left.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/left.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
