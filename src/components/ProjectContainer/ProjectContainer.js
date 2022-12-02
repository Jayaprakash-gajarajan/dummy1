import React from 'react'
import Project from '../Project/Project';
import { Element } from 'react-scroll';
import "./ProjectContainer.css";

const ProjectContainer = () => {
    const projects = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_Xlwk6One6DpiLl2NeErV0_707FoVb9HaA&usqp=CAU",
            tittle: "Calculator",
            desc: "To design a responsive simple calculator using html,css,and dom.",
            link: "www.google.com",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTRzhuu3AKQu4yd6-TE9zD958QU6VisuHaw&usqp=CAU",
            tittle: "Temperature",
            desc: "To design a responsive cards to click the card button see the different country temperature.",
            link: "www.google.com",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwxp1SyB5KwIOaaSTpXzYs4MBE4SLj3q5o45F6UxUuAW8uyuo1jJ6Ss7jM07La84Y9ow&usqp=CAU",
            tittle: "Pagination",
            desc: "To design a pagination table using DOM.the table data is fetch in API.",
            link: "www.google.com",
        }
    ]
    return (
        <Element className="projectContainer" id="projects">
            <h1>Projects</h1>
            <p>Here some simple beginer level projects which i done for making lives of people easy.</p>
            <div className='projectContainer__projects'>
                {
                    projects.map((project, index) => {
                        return (
                            <Project
                                key={index}
                                img={project.img}
                                tittle={project.tittle}
                                desc={project.desc}
                                link={project.link}
                            />
                        )
                    })
                }
            </div>
        </Element>
    );
}

export default ProjectContainer
