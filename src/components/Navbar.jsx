import React from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';
import {FaLinkedin,FaUnity,FaGithub,FaTwitter} from 'react-icons/fa'
import '../App.css';

const navbar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" className="my-2">
        <Navbar.Brand href="/">
            <FaUnity size="3rem"/>
            Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#technologies">Technologies</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-info" className="social-icons" href="https://github.com/ayush-sys" size="md">
              <FaGithub size="1.2em"/>
            </Button>
            <Button variant="outline-info" className="social-icons" href="https://twitter.com/ayushmp7" size="md">
                <FaTwitter size="1.2em"/>
            </Button>
            <Button variant="outline-info" className="social-icons" href="https://www.linkedin.com/in/ayush-pattanayak-32225b202/" size="md">
                <FaLinkedin size="1.2em"/>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
 
export default navbar;

