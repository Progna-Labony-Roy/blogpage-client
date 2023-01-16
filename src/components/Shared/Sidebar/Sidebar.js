import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <div className="title">ABOUT ME</div>
        <img
          className="sidebar-image"
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          alt=""
        />
        <p className="my-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam
          ullam dolore enim aliquam, possimus molestiae quas quam aut,
          reiciendis ea
        </p>
      </div>
      <div className="sidebar-items">
        <div className="title">CATEGORIES</div>
        <ul className="catagory-list">
          <li className="listitem">One</li>
          <li className="listitem">Two</li>
          <li className="listitem">Three</li>
          <li className="listitem">Four</li>
          <li className="listitem">Five</li>
        </ul>
      </div>
      <div className="sidebar-items">
        <div className="title">FOLLOW US</div>
        <div className="sidebar-socials">
          <i className="sidebar-icons fa-brands fa-square-facebook"></i>
          <i className="sidebar-icons fa-brands fa-square-pinterest"></i>
          <i className="sidebar-icons fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
