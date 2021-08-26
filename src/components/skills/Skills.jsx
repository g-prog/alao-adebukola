import "./skills.scss"

export default function Skills() {
    return (
        <div className="skills" id='skills'>
            <div className="container">
            <div className="images">
                <div className="items">
                    <img src="assets/react.png" alt="react" />
                    <p>REACT</p>
                </div>

                <div className="items">
                    <img src="assets/django.png" alt="django" />
                    <p>DJANGO</p>
                </div>

                <div className="items">
                    <img src="assets/html.jpg" alt="html" />
                    <p>HTML</p>
                </div>  
            </div>

                <div className="images2">
                    <div className="items">
                        <img src="assets/css.jpg" alt="css" />
                        <p>CSS</p>
                    </div>

                    <div className="items">
                        <img src="assets/sass.jpg" alt="Sass" />
                        <p>SASS</p>
                    </div>

                    <div className="items">
                        <img src="assets/bootstrap.jpg" alt="bootstrap" />
                        <p>BOOTSTRAP</p>
                    </div>

                </div>


                <div className="images3">
                    <div className="items">
                        <img src="assets/github.PNG" alt="git" />
                        <p>GIT</p>
                    </div>

                    <div className="items">
                        <img src="assets/tailwind.jpg" alt="tailwind" />
                        <p>TAILWIND</p>
                    </div>

                    <div className="items">
                        <img src="assets/haskell.jpg" alt="haskell" />
                        <p>HASKELL</p>
                    </div>

                </div>
            </div>

            
        </div>
    )
}
