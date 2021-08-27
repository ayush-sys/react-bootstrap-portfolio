import React from 'react';
import '../App.css';
import {Image} from 'react-bootstrap';

const About = () => {
    return ( 
    <div id="about" className="my-2"> 
        <div className="about-section">
            <Image src={`${process.env.PUBLIC_URL}/images/profile-pic.jpeg`} className="profile-pic"/>
            <h3 className="intro-head">Hey, I'm Ayush Pattanayak</h3>
            <p className="intro-sub text-muted">Student | Web Develeoper | ML Enthusiast</p>
            <h5 className="intro-body">I create platforms that enable people to solve problems.</h5>
        </div>
    </div>
    );
}
 

export default About;
