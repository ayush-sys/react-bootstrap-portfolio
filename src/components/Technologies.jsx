import React from 'react';
import '../App.css';
import {CardDeck}from 'react-bootstrap';
import CustomCard from './Card';
import react from '../assets/images/logos/react.svg';
import java from '../assets/images/logos/java.svg';
import python from '../assets/images/logos/python.svg';
import js from '../assets/images/logos/js.svg';
import bootstrap from '../assets/images/logos/bootstrap.svg';
import nodejs from '../assets/images/logos/nodejs.svg';
import figma from '../assets/images/logos/figma.svg';
import html5 from '../assets/images/logos/html5.svg';
import css3 from '../assets/images/logos/css3.svg';
import sql from '../assets/images/logos/sql.svg';
import mongodb from '../assets/images/logos/mongodb.svg';
import git from '../assets/images/logos/git.svg';
import github from '../assets/images/logos/github.svg';
import numpy from '../assets/images/logos/numpy.svg';
import pandas from '../assets/images/logos/pandas.svg';
import matplotlib from '../assets/images/logos/matplotlib.svg';
import seaborn from '../assets/images/logos/seaborn.svg';
import tensorflow from '../assets/images/logos/tensorflow.svg';
import heroku from '../assets/images/logos/heroku.svg';
import netlify from '../assets/images/logos/netlify.svg';
import firebase from '../assets/images/logos/firebase.svg';
import Icons from './Images';


const technologies = () => {
    const techIcons = [
        {path:html5}, 
        {path:css3}, 
        {path:js},
        {path:react}, 
        {path:bootstrap}, 
        {path:java},
        {path:python}, 
        {path:nodejs}, 
        {path:sql}, 
        {path:mongodb}, 
        {path:figma}, 
        {path:numpy}, 
        {path:pandas}, 
        {path:matplotlib}, 
        {path:seaborn}, 
        {path:tensorflow}, 
        {path:git}, 
        {path:github}, 
        {path:heroku}, 
        {path:netlify},
        {path:firebase},
    ];


    return ( 
    <div id="technologies" className="my-2 app-section"> 
        <h2 className="py-2">Technologies</h2>
        <div className='logos-section'>
            {techIcons.map((techIcon) => (
                <Icons route={techIcon.path} type={'tech'}/>
            ))}
        </div>
        <CardDeck>
            <CustomCard/>
        </CardDeck>
    </div> );
}
 
export default technologies;
