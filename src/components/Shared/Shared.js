import React from 'react';
import Blogs from './Blogs/Blogs';
import Sidebar from './Sidebar/Sidebar';
import './Shared.css'

const Shared = () => {
    return (
        <div className='shared'>
            <Blogs></Blogs>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Shared;