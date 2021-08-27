import React from 'react';
import '../App.css';
import {CardDeck}from 'react-bootstrap';
import CustomCard from './Card';


const technologies = () => {
    return ( 
    <div id="technologies" className="my-2 app-section"> 
        <h2 className="py-2">Technologies</h2>
        <CardDeck>
            <CustomCard/>
        </CardDeck>
    </div> );
}
 
export default technologies;