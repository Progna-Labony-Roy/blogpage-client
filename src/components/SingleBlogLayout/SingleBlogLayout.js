import React from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import SingleBlog from '../SingleBlog/SingleBlog';
import './SingleBlogLayout.css';

const SingleBlogLayout = () => {
    return (
        <div className='single-layout'>
            <SingleBlog></SingleBlog>
            <Sidebar></Sidebar>
        </div>
    );
};

export default SingleBlogLayout;