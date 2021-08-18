import "./works.scss"

export default function Works() {
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
                                <p>I designed this project with the help of React.js, Tailwind CSS,SASS, 
                                    HTML and CSS.
                                    I implemented toast notifications with the help of React toastify and also 
                                    utilized the JavaScript Geolocation API in order to access the user location.
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
            </div>
           
            
        </div>
    )
}
