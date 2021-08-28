import "./testimonials.scss"

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
           <div className="heading">
                <h1>Work Experience</h1>
           </div>
            <div className="container">
                <div className="card">
                    <div className="circle"></div>
                    <div className="content">
                        <h6>Africa's Blockchain Center for Developers</h6>
                        <p>Web Developer</p>
                        <p>Assisted in the development of front-end web applications using React and Next.js,
                            HTML, CSS, Bootstrap and Tailwind CSS
                        </p>
                        <p>Ran transactions in the Cardano Testnet with the use of Dandelion APIs</p>
                        <p>Performed blockchain queries using Axios, GraphQL and Dandelion APIs</p>
                        <p>Created terminal based applications with Haskell in the backend</p>
                    </div>
                    <img src="assets/html.jpg" alt="caj" />
                </div>
            
            </div>
            
        </div>
    )
}
