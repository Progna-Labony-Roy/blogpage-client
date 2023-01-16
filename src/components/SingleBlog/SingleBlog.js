import React from "react";
import "./SingleBlog.css";

const SingleBlog = () => {
  return (
    <div className="single-blog">
      <img
        className="singleblog-img"
        src="https://images.unsplash.com/photo-1673809758231-d864d9e35307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
      <span className="single-blog-title">Lorem ipsum, dolor sit amet </span>
      <div className="single-blog-info">
        <span className="author-name">Auther</span>
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="single-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A debitis
        omnis quisquam non veniam sunt eos tenetur sed assumenda ratione
        provident aut, vitae numquam vel voluptatibus adipisci incidunt quam.
        Labore.
      </p>
      <div className="singleBlogIcons">
      <i class="singleBlogIcon fa-regular fa-pen-to-square"></i>
      <i class="singleBlogIcon fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
};

export default SingleBlog;
