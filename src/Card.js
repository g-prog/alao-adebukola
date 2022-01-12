import React from 'react';
import './card.scss';

function Card({ src, title, description, link, github }) {
    return (
        <div className='cards'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                 <a href={link}> Hosted Project </a>
                 <a href={github}>Github </a>
                
            </div>
        </div>
    )
}

export default Card
