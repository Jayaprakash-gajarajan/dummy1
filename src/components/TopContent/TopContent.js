import React from 'react'
import { Link } from 'react-scroll'
import "./TopContent.css"

const TopContent = () => {
    return (
        <div className='topContent'>
            <div className='topContent__container'>
                <h1>Mr.Jayaprakash G</h1>
                <p>My self Jayaprakash.G.I can intrest to create a
                    new thinks</p>
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
