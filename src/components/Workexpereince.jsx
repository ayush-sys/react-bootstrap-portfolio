import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import '../App.css';
import smg from '../assets/images/work/samsung.svg';
import ins from '../assets/images/work/internshala.svg';
import Images from './Images';


const Projects = () => {
    return(
        <div id="work-expereince" className="my-2 app-section"> 
            <h2 className="py-2">Work Expereince</h2>
            <Row>
                <Col md={6}>
                    <Card border='info' style={{marginTop:'1rem'}}>
                        <Images route = {smg} type = 'work smg' />
                            <Card.Body>
                                <Card.Title>Samsung Research Institute</Card.Title>
                                <p className='job-title'>Intern</p>
                                    <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </Card.Text>
                            </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">June 2021 - Present</small>
                        </Card.Footer>
                    </Card>

                </Col>

                <Col md={6}>
                    <Card border='info' style={{marginTop:'1rem'}}>
                        <Images route = {ins} type = 'work ins' />
                            <Card.Body>
                                <Card.Title>Internshala</Card.Title>
                                <p className='job-title'>Intern</p>
                                    <Card.Text>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </Card.Text>
                            </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">June 2021 - Aug 2021</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}


export default Projects;