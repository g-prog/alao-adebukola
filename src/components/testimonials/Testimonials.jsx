import "./testimonials.scss"

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <div className="cta">
                <p>Click/hover on the images</p>
            </div>
           
           <div className="heading">
                <h1>Work Experience</h1>
           </div>
            <div className="container">
                <div className="card">
                    <div className="circle"></div>
                    <div className="content">
                        <h6>Africa's Blockchain Center for Developers</h6>
                        <h6>October 2020-May 2021</h6>
                        <h6>Web Developer</h6>
                        <div className="item">
                            <div className="item1">
                            <p>Assisted in the development of front-end web applications using React and Next.js,
                            HTML, CSS, Bootstrap and Tailwind CSS.
                            </p>
                            </div>
                            <div className="item2">
                                <p>Ran transactions in the Cardano Testnet with the use of Dandelion APIs.</p>
                            </div>
                            <div className="item3">
                                <p>Created terminal based applications with Haskell in the backend.</p>
                            </div>
                        </div>
                        
                    </div>
                    <img src="assets/work1.jpg" alt="caj" />
                </div>


                <div className="card2">
                    <div className="circle"></div>
                    <div className="content">
                        <h6>Internships with Andela, Google and HNG</h6>
                        <h6>April 2020 - October 2020</h6>
                        <h6>Build for SDG's powered by Andela</h6>
                        <h6>Intern</h6>
                        <div className="item">
                            <div className="item1">
                            <p>Assisted in the development of a Web app that centered on Agriculture.
                            </p>
                            </div>
                            <div className="item2">
                            <h6>Google Africa Developer Scholarship</h6>
                             <h6>Mentor</h6>
                             <p>Provided Guidance to team members in the development of web based applications.</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <img src="assets/work1.jpg" alt="caj" />
                </div>

                
            </div>

            <div className="resume">
                <a href="https://docs.google.com/document/d/1Bo7Y4pxm0hGGd107V38_MVuftFIUbKRU/edit?usp=sharing&ouid=101220437427303354739&rtpof=true&sd=true">
                    <button>View full Resume</button>
                </a>
            </div>
            
        </div>
    )
}
