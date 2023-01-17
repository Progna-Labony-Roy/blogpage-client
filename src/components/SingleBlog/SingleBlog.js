import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./SingleBlog.css";

const SingleBlog = () => {
  const singleblog= useLoaderData();
  const {_id,image_url,title,details,author}=singleblog;
  console.log(_id);


  return (
    <div className="single-blog">
      <img
        className="singleblog-img"
        src={image_url}
        alt=""
      />
      <span className="single-blog-title">{title}</span>
      <div className="single-blog-info">
        <span className="author-name">Author : {author.name}</span>
        {/* <span className="post-date">1 hour ago</span> */}
      </div>
      <p className="single-description">
        {details}
      </p>
      <div className="singleBlogIcons">
      <Link to="/">Home</Link>
      <div>
      <i class="singleBlogIcon fa-regular fa-pen-to-square"></i>
      <i class="singleBlogIcon fa-solid fa-trash-can"></i>
      </div>
      </div>
      
    </div>
  );
};

export default SingleBlog;
