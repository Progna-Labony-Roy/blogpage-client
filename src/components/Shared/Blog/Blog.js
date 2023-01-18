import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = ({blog, refetch}) => {
    const {_id,image_url,title,details,author}=blog;

    const handleDeleteBlog = (blog) => {
        const proceed = window.confirm("Delete Blog");
        if (proceed) {
    fetch(`https://blogpage-server.vercel.app/deleteblog/${blog?._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                alert("deleted successfully");
                refetch();
              }
            });
        }
        fetch(``, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
          });
      };


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
                <span className='posting-date'> Author : {author.name}</span>
            </div>
            <p className="details">
            {details.length > 100 ? (
              <>
                {details.slice(0, 100) + "..."}
              </>
            ) : (
              <>{details}</>
            )}
            </p>
           <div className="delete">
           <button className='delete-btn' onClick={()=>{handleDeleteBlog(blog)}} >Delete</button>
           </div>
        </div>
    );
};

export default Blog;