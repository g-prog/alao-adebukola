import "./testimonials.scss"

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <div className="cta">
                <p>Click/hover on the images</p>
            </div>

            <div className="cta2">
                <p>Tap on the white background</p>
            </div>
           
           <div className="heading">
                <h1>Work Experience</h1>
           </div>
            <div className="container">
                <div className="card">
                    <div className="circle"></div>
                    <div className="content">
                        <h6>Zillian Group, Canada (Remote) </h6>
                        <h6>September 2021-present</h6>
                        <h6>Front End Developer</h6>
                        <div className="item">
                            <div className="item1">
                            <p>Built a website similar to www.airbnb.com in design and architecture using React.js in the Frontend and Strapi CMS in the backend.
                            </p>
                            </div>
                            <div className="item2">
                                <p>Utilized REST APIS from a Node.js backend, to the frontend.</p>
                            </div>
                            <div className="item3">
                                <p>Developed drag-and-drop web pages using Editor.js and Grapes.js.</p>
                            </div>
                        </div>
                        
                    </div>
                    <img src="assets/work1.jpg" alt="placeholder" />
                </div>


                <div className="card2">
                    <div className="circle"></div>
                    <div className="content">
                    <h6>Africa's Blockchain Center for Developers, Nigeria.</h6>
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

                
            </div>

            <div className="resume">
                <a href="https://docs.google.com/document/d/101220437427303354739&rtpof=true&sd=true">
                    <button>View full Resume</button>
                </a>
            </div>
            
        </div>
    )
}
