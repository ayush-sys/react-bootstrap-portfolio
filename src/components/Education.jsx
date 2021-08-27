import React from 'react';
import '../App.css';
import { CardDeck,Card } from 'react-bootstrap';
import { educationData } from '../data';


const Education = () => {
    return ( 
    <div id="education" className="my-2"> 
        <h2 className="py-2">Education</h2>
        <CardDeck>      
        {educationData.map((data,id) => {
                return(
                <Card style={{ width: '18rem' }} border="info">
                    <Card.Body className="py-2">
                        <Card.Title>{data.institute}</Card.Title>
                        <Card.Text>{data.branch}
                            <br />
                            {data.score}
                            <br />
                            <span className="text-muted">{data.duration}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
                );
            })}
        </CardDeck>
    </div>
    );
}
 

export default Education;