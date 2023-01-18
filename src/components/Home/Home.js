import React from 'react';
import Header from '../Header/Header';
import Shared from '../Shared/Shared';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Header></Header>
            <div  className='home'> <Shared></Shared></div>
        </div>
    );
};

export default Home;