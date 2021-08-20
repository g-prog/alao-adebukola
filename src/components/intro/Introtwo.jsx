import "./intro.scss"



export default function Intro() {
    return (
        <div className="intro" id="intro">
                <div className=" md:flex flex-row item-center justify-around">
                    <div className="pt-12 md:pt-0 mt-0 lg:pt-20  ">
                        <div className="bg-red-700  md:mt-7  bg-opacity-70 lg:w-max  rounded-full">
                            <div className="picture">
                                <img src="assets/buky.png" className="pic" alt="Buky"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 md:mt-8 lg:mt-40 pl-0 md:pl-14 lg:pl-0 relative overflow-y-hidden">
                        <div className="wrapper">
                            <h2 className="font-bold text-3xl">Hi There, I'm<br></br>
                            <span className="font-bold text-5xl" >Alao Adebukola</span><br></br>Experienced<span className="text-red-700">  Web Developer</span></h2>


                        </div>
                        <div className="arrow"> 
                            <a href="#portfolio" className="bottom-0 absolute lg:bottom-0.5 ml-28 lg:ml-24">
                                
                                <img src="assets/down.jpg" alt="arrow"/>
                            </a>
                        </div>
                        
                    </div>
                   
                </div>
            
        </div>
    )
}
