import React from 'react';
import '../App.css';
import {CardDeck, Image}from 'react-bootstrap';
import CustomCard from './Card';
import { logos } from '../data';



const technologies = () => {
    return ( 
    <div id="technologies" className="my-2 app-section"> 
        <h2 className="py-2">Technologies</h2>
        <div className='logos-section'>
            {logos.map((logo) => {
                return (
                    <Image src={`${process.env.PUBLIC_URL}` + `${logo}`} className='tech-logos'/>
                );
            })}
        </div>
        <CardDeck>
            <CustomCard/>
        </CardDeck>
    </div> );
}
 
export default technologies;