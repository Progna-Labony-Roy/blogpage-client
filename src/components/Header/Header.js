import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitle">
                <span className='title-sm'>ReactJS and NodeJS</span>
                <span className='title-lg'>Blog</span>
            </div>
            <img className='header-image' src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" />
        </div>
    );
};

export default Header;