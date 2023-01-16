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
        <Link to='/' className="link-items">HOME</Link>
        <Link to='/contact' className="link-items">CONTACT</Link>
        <Link to='/addblog' className="link-items">ADD BLOG</Link>
        <Link to='' className="link-items">LOGOUT</Link>
      </div>
      <div className="nav-search">
      <Link to='/login' className="link-items">LOGIN</Link>
      <Link to='/register' className="link-items">REGISTER</Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
