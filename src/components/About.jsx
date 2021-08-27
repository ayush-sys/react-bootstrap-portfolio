import React from 'react';
import '../App.css';
import {Image} from 'react-bootstrap';
import { aboutData } from '../data';

const About = () => {
    return ( 
    <div id="about" className="my-2 app-section"> 
        <div className="about-section">
            <Image src={`${process.env.PUBLIC_URL}/images/profile-pic.jpeg`} className="profile-pic"/>
            <h3 className="intro-head">Hey, I'm {aboutData.name}</h3>
            <p className="intro-sub text-muted">{aboutData.sub}</p>
            <h5 className="intro-body">{aboutData.body}</h5>
        </div>
    </div>
    );
}
 

export default About;