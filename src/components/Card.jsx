import React from 'react';
import {Card, Image} from 'react-bootstrap'
import {Data} from '../data';
import '../App.css';

const CustomCard = () => {

    return(
        <>
            {Data.map((d,id) => {
            return(
            <Card style={{ width: '18rem' }} border="info">
                <Card.Body>
                    <Card.Title>{d.title}</Card.Title>
                    <Card.Text>{d.desc}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    {d.footer.map(icon => {
                        return (
                            <Image src={`${process.env.PUBLIC_URL}` + `${icon}`} height="25rem" className="social-icons"/>  
                            );
                    })}
                </Card.Footer>
            </Card>
            );
        })}
    </>
    )
}
 
export default CustomCard;

