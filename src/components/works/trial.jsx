import "./works.scss"

export default function Works() {

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


        

       
    ]
    return (
        <div className="works" id="works">
            <div className="slider">
            
                
           <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/react.png" alt="react logo" />
                                </div>
                                <h2>Meck Health</h2>
                                <p>I designed this project with the help of React.js, Tailwind CSS, Material UI, SASS, 
                                    HTML and CSS.
                                    I implemented toast notifications with the help of React toastify and also 
                                    utilized the JavaScript's Geolocation API in order to access the user's location.
                                    I also used the useState Hook and useEffect Hook to make the contents dynamic.
                                </p>
                                <span><a href="https://health-nine.vercel.app/">Link to project</a></span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/meck.png" alt="meck" />
                        </div>
                    </div>
                </div>
                <img src="assets/left.png" alt="arrow" className="arrow left"/>
                <img src="assets/left.png" alt="arrow" className="arrow right "/>

            

            </div>
            
           
            
        </div>
    )
}
