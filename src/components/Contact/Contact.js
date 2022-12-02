import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons"
import "./Contact.css";
const Contact = () => {
    return (
        <Element className="contact" id="contact">
            <h1>Contact</h1>
            <div className='contact__container'>
                <p>
                    Email:<span>jayaprakash58563@gmail.com</span>
                </p>
                <p>
                    Github Username:<span>Jayaprakash G</span>
                </p>
                <div className='contact__icon'>
                    <a href='google.com'>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </a>
                    <a href='https://www.instagram.com/jayaprakash786'>
                        <IconButton>
                            <Instagram />
                        </IconButton>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100041531989497&mibextid=ZbWKwL'>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact
