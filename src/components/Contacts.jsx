import React from 'react';
import '../App.css';
import {Container,Col,Row,Button} from 'react-bootstrap';
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'


const Contacts = () => {
    return ( 
        <div className="my-2" id="contacts">
        <h2 className="py-2">Contacts</h2>
        <Container>
            <Row>
                <Col md={6}>
                <div className="footer-text">
                    <p>
                        Phone : 0000-000-000 <br/>
                        Email : contactme@gmail.com
                    </p>
                    <Button variant="outline-info" className="footer-social-icons" href="https://github.com/ayush-sys" size="md">
                        <FaGithub size="1.2em"/>
                    </Button>
                    <Button variant="outline-info" className="footer-social-icons" href="https://twitter.com/ayushmp7" size="md">
                        <FaTwitter size="1.2em"/>
                    </Button>
                    <Button variant="outline-info" className="footer-social-icons" href="https://www.linkedin.com/in/ayush-pattanayak-32225b202/" size="md">
                        <FaLinkedin size="1.2em"/>
                    </Button>
                </div>
                </Col>


                <Col md={6}>
                <div className="footer-text">
                    <p>
                        “Don’t repeat yourself. Every piece of knowledge must have a single, unambiguous, 
                        authoritative representation within a system.” <br/>
                        — Andy Hunt and Dave Thomas
                    </p>
                </div>
                </Col>
            </Row>
        </Container>
        </div>
     );
}
 
export default Contacts;

