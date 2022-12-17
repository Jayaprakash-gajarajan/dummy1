import React from 'react';
import { Element } from 'react-scroll';
import Experience from '../ExperienceBox/Experience';
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
    return (
        <Element className='experienceContainer' id="exp">
            <h1>Experience</h1>
            <div className='experienceContainer__info'>
                <Experience number="+6" tittle="Begineer level projects" />
                <Experience number="300+" tittle="Problems solved in Guvi" style={{ backgroundColor: "blue" }} />
                {/* <Experience number="6+" tittle="Years Teaching" /> */}
                <Experience number="3month" tittle="MERN stack developer course" />
            </div>
        </Element>
    )
}

export default ExperienceContainer
