import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = ({blog}) => {
    const {_id,image_url,title,details,author}=blog;
    return (
        <div className='blog'>
            <img className='blog-img' src={image_url} alt="" />
            <div className="blog-info">
                {/* <div className="blog-names">
                    <span className="blog-name">Music</span>
                    <span className="blog-name">Life</span>
                </div> */}
                <Link to={`/blog/${_id}`} className='blog-title'>{title}</Link>
                <hr />
                <span className='posting-date'>{author.name}</span>
            </div>
            <p className="description">{details}</p>
        </div>
    );
};

export default Blog;