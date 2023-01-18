import React from 'react';
import Banner from './Banner/Banner';
import './Header.css';
  

const Header = () => {
    return (
        <div className='header'>
            {/* <div className="headerTitle">
                <span className='title-sm'>News</span>
                <span className='title-lg'>Blog</span>
            </div> */}
            <Banner></Banner>
        </div>
    );
};

export default Header;