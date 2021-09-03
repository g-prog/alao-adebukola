import "./footer.scss"

function Footer() {
    return (
        <div className="footer">
            <div className="heading">
                <h1>ALAO ADEBUKOLA</h1>
            </div>
            <div className="container">
                <div className="image1">
                    <a href="https://github.com/g-prog">
                     <img src="assets/github.PNG" alt="github" /> 
                    </a>
                    
                </div>
                <div className="image2">
                    <a href="https://www.linkedin.com/in/adebukola-alao-17a751176">
                        <img src="assets/linkedin.jpg" alt="linkedin" />    
                    </a>
                   
                </div>

                <div className="image3">
                    <a href="https://twitter.com/alaoadebukola?lang=en">
                        <img src="assets/tw.png" alt="twitter" />  
                    </a>
                    
                </div>

                <div className="image4">
                    <a href="https://github.com/g-prog">
                     <img src="assets/fb.png" alt="facebook" />
                    </a>
                    
                </div>

            </div>
            <div className="copyright">
                <img src="assets/copyright.jpg" alt="copyright" />
                <p>Alao Adebukola 2021</p>
            </div>

            
            
            
        </div>
    )
}

export default Footer








