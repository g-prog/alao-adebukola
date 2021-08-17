import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";

export default function Portfolio() {
    const  [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured",
            
        },


        {
            id: "django",
            title: "Django App",
            
        },

        {
            id: "react",
            title: "React App",
            
        },

        {
            id: "next",
            title: "Next App",
            
        },

        {
            id: "other",
            title: "Other Works",
            
        },
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected}
                    id={item.id }/>
                ))}

            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/caj.jpg" alt="caj" />
                    <h3>Blog App</h3>   
                </div>
                <div className="item">
                    <img src="assets/caj.jpg" alt="caj" />
                    <h3>Blog App</h3>  
                </div>
                <div className="item">
                    <img src="assets/caj.jpg" alt="caj" />
                    <h3>Blog App</h3> 
                </div>

                <div className="item">
                    <img src="assets/caj.jpg" alt="caj" />
                    <h3>Blog App</h3> 
                </div>
                <div className="item">
                    <img src="assets/caj.jpg" alt="caj" />
                    <h3>Blog App</h3> 
                </div>
                <div className="item">
                    <img src="assets/caj.jpg" alt="caj" />
                    <h3>Blog App</h3> 
                </div>
            </div>
            
            
            
        </div>
    )
}
