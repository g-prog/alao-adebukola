import "./skills.scss"

export default function Skills() {
    return (
        <div className="skills" id='skills'>
            <div className="heading">
             <h1>Skills</h1>
            </div>
            
            <div className="container">
                <div className="images">
                <div className="items">
                    <img src="assets/react.png" alt="react" />
                    <p className="text-center">REACT</p>
                </div>

                <div className="items">
                    <img src="assets/django.png" alt="django" />
                    <p className="text-center">DJANGO</p>
                </div>

                <div className="items">
                    <img src="assets/html.jpg" alt="html" />
                    <p className="text-center">HTML</p>
                </div>  
                </div>

                <div className="images2">
                    <div className="items">
                        <img src="assets/css.jpg" alt="css" />
                        <p className="text-center">CSS</p>
                    </div>

                    <div className="items">
                        <img src="assets/sass.jpg" alt="Sass" />
                        <p className="text-center">SASS</p>
                    </div>

                    <div className="items">
                        <img src="assets/bootstrap.jpg" alt="bootstrap" />
                        <p className="text-center">BOOTSTRAP</p>
                    </div>

                </div>


                <div className="images3">
                    <div className="items">
                        <img src="assets/github.PNG" alt="git" />
                        <p className="text-center">GIT</p>
                    </div>

                    <div className="items">
                        <img src="assets/tailwind.jpg" alt="tailwind" />
                        <p className="text-center">TAILWIND</p>
                    </div>

                    <div className="items">
                        <img src="assets/haskell.jpg" alt="haskell" />
                        <p className="text-center">HASKELL</p>
                    </div>

                </div>
            </div>

            
        </div>
    )
}
