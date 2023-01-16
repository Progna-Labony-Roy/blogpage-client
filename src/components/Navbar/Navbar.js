import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
        <div className="navbar">
      <div className="">
        <i className="nav-icons fa-brands fa-square-facebook"></i>
        <i className="nav-icons fa-brands fa-square-pinterest"></i>
        <i className="nav-icons fa-brands fa-square-instagram"></i>
      </div>
      <div className="nav-items">
        <li className="link-items">ABOUT</li>
        <li className="link-items">CONTACT</li>
        <li className="link-items">WRITE BLOG</li>
        <li className="link-items">LOGOUT</li>
      </div>
      <div className="nav-search">
        <img className="nav-image" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt="" />
      <i className="search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
