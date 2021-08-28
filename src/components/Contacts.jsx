import React from 'react';
import '../App.css';
import {Container,Col,Row,Button} from 'react-bootstrap';
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import { footerData } from '../data';


const Contacts = () => {
    return ( 
        <div className="my-2 app-section" id="contacts">
        <h2 className="py-2">Contacts</h2>
        <Container>
            <Row>

                {/* 1st Column */}
                <Col md={6}>
                <div className="footer-text">
                    <p>
                        Want to discuss a project or just want to say Hii 👋 ! <br/>
                        <form method="post" action="mailto:demomail@gmail.com" className='mail-form'>
                            <Button variant='outline-info' type='submit'>
                                Drop me a mail here
                                <MdEmail/>
                            </Button>
                        </form>
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


                {/* 2nd Column */}
                <Col md={6}>
                <div className="footer-text">
                    <p>{footerData.quote}</p>
                    <a>© {footerData.developer}</a>
                </div>
                </Col>
            </Row>
        </Container>
        </div>
     );
}
 

export default Contacts;

