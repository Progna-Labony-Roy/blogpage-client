import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <img className='blog-img' src="https://images.unsplash.com/photo-1673809758231-d864d9e35307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <div className="blog-info">
                <div className="blog-names">
                    <span className="blog-name">Music</span>
                    <span className="blog-name">Life</span>
                </div>
                <span className='blog-title'>Lorem ipsum, dolor sit amet </span>
                <hr />
                <span className='posting-date'>1 hour ago</span>
            </div>
            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A debitis omnis quisquam non veniam sunt eos tenetur sed assumenda ratione provident aut, vitae numquam vel voluptatibus adipisci incidunt quam. Labore.</p>
        </div>
    );
};

export default Blog;