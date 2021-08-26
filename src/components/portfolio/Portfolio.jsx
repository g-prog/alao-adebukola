import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import { featuredportFolio, djangoportFolio, reactportFolio, nextportFolio, otherportFolio } from "../../data";

export default function Portfolio() {
    const  [selected, setSelected] = useState("featured");
    const  [data, setData] = useState([]);
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
    useEffect (()=>{
        switch(selected){
                case "featured":
                    setData(featuredportFolio);
                    break;

                case "django":
                    setData(djangoportFolio);
                    break;

                case "react":
                    setData(reactportFolio);
                    break;

                case "next":
                    setData(nextportFolio);
                    break;

                case "other":
                    setData(otherportFolio);
                    break;

                default:
                    setData(featuredportFolio);



        }
    }, [selected])
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
                {data.map(d=>(

                    <div className="item">
                    <img src={d.img} alt="caj" />
                    <h3>{d.title}</h3>   
                    </div>

                ))}
                
                
            </div>

           <div className="cta">
                    <p>slide to see full details  below</p>
                    <a href="#works">
                        <img src="assets/down.jpg" alt="down arrow" />
                    </a>
           </div>
           
            
            
            
        </div>
    )
}
