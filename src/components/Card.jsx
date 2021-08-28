import React from 'react';
import {Card} from 'react-bootstrap'
import {Data} from '../data';
import '../App.css';

const CustomCard = () => {

    return(
    <>
        {Data.map((d,id) => {
            return(
                <Card style={{ width: '18rem' }} border='info'>
                    <Card.Header>
                        {d.title}
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{d.desc}</Card.Text>
                    </Card.Body>
                </Card>
            );
        })}
    </>
    )
}
 
export default CustomCard;

