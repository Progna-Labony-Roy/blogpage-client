import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-page'>
            <h2 className='heading'>Let us know about this application</h2>
            <ul>
                <li>In this page, we will learn about the characteristics of this website.</li>
                <li>On the homepage, there are blogs. These details originate from the backend.</li>
                <li>I have utilized ReactJS for front-end development.</li>
                <li>I utilized Node and Express for the backend, and the database is stored in MongoBD, which is connected to the server.</li>
                <li>My details are contained on profile page. Also included is a contact form. This form allows anyone to email me.</li>
                <li>The site is completely responsive.</li>
            </ul>
        </div>
    );
};

export default About;