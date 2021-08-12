import "./intro.scss"
import { ExpandMore } from "@material-ui/icons"

export default function Intro() {
    return (
        <div className="intro" id="intro">
                <div className=" md:flex flex-row justify-around">
                    <div className="pt-12 md:pt-0 mt-0 lg:pt-20  ">
                        <div className="bg-red-600 bg-opacity-70 lg:w-max  rounded-full">
                            <div className="picture">
                                <img src="assets/buky.png" className="pic" alt="Buky"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-20 lg:mt-40">
                        <div className="wrapper">
                            <h2 className="font-bold text-3xl">Hi There,I'm<br></br>
                            <span className="font-bold text-5xl" >Alao Adebukola</span><br></br>Experienced<span></span></h2>

                        </div>
                        <a href="#portfolio">
                            <ExpandMore/>
                        </a>
                    </div>
                   
                </div>
            
        </div>
    )
}
