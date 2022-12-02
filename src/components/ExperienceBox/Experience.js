import React from 'react';
import "./Experience.css";
const Experience = ({ number, tittle, style }) => {
    return (
        <div style={{ ...style }} className="experience">
            <h1 className='experience-box-text'>{number}</h1>
            <p>{tittle}</p>
        </div>
    )
}

export default Experience
