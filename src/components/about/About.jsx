import "./about.scss"

function About() {
    return (
        <div className="about">
            <div className="heading">
                <h1> About Me</h1>
            </div>
            <div className="container">
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/buky.png" alt="buky" />
                    </div>
                </div>
                <div className="right">
                    <p> I am Alao Adebukola, a First Class Graduate of Agricultural Extension and Rural Development 
                        from Obafemi Awolowo University, Ile-Ife, Nigeria.
                        I am deeply passionate about Front-end development and I have 2 years Industry experience building 
                        Web applications. Currently, I work remotely as a Front-End Developer for Zillian Group, Canada.
                    </p>
                    <p>Although I have experience working in the server-side of web applications, at the interim, I am primarily
                    focused on Front-end Web development.</p>
                    <p>
                         I would describe myself to be highly motivated towards learning and advancing in every aspect. I take so much pride in giving
                        my best in every opportunity. I go over and beyond to ensure that my client's needs are satisfied.
                        When I am not programming, I am busy exploring my other interests in contemporary arts.
                    </p>
                </div>
            </div>
             
            
            
        </div>
    )
}

export default About

