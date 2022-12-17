import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"

const TopContent = () => {
    return (
        <div className='topContent'>
            <div className='topContent__container'>
                <h1>Mr.Jayaprakash G</h1>
                <p>My self Jayaprakash.G.Currently complete the mern stack developer course in Guvi.Now i am
                    looking for a job.
                </p>
                <a>
                    <button className="topContent__downloadButton">Download CV</button>
                </a>
                <Link to='projects' smooth={true} duration={500}>
                    <button className='topContent__workButton'>My Work</button>
                </Link>
            </div>
        </div>
    )
}

export default TopContent
