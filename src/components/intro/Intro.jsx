import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"



export default function Intro() {
    const textRef = useRef();

   useEffect(()=>{
       init(textRef.current,{
           showCursor: 'false',
           strings: ["Front-end Developer", " in React.js,  Next.js", "Tailwind CSS, Bootstrap" ,"HTML,CSS,SASS", "rendering API's", "Material UI, Fontawesome"]
       } )


   }, [])
    return (
        <div className="intro" id="intro">
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/buky.png" alt="buky" />
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2 className="font-bold text-2xl">Hi There,I am</h2>
                        <h1 >Alao Adebukola</h1>
                        <h3 className="font-bold text-2xl">Experienced  <span ref={textRef}></span></h3>
                    </div>

                    <a href="#portfolio">
                        <img src="assets/down.jpg" alt="down arrow" />
                    </a>
                </div>
            
        </div>
    )
}
