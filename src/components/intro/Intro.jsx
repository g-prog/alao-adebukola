import "./intro.scss"



export default function Intro() {
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
                        <h3 className="font-bold text-2xl">Experienced<span></span></h3>
                    </div>

                    <a href="#portfolio">
                        <img src="assets/down.jpg" alt="down arrow" />
                    </a>
                </div>
            
        </div>
    )
}
