import React from 'react';
import { Image } from 'react-bootstrap';
import '../App.css';


const images = (props) => {
    return (
        <Image className = {props.type} src={props.route}/>
    );
}

export default images;

