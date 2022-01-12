import React from 'react';
import './card.scss';

function Card({ src, title, description, hosted,github }) {
    return (
        <div className='cards'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <button> <a href={hosted}> Hosted Project </a></button>
                <button> <a href={github}> Github </a></button>
                
            </div>
        </div>
    )
}

export default Card
