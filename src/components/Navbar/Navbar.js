import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

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
       
      </div>
      <div className="nav-authentication">
      {
        user?.uid ?  <Link onClick={handleLogOut} className="link-items">LOGOUT</Link> :  <>
        <Link to='/login' className="link-items">LOGIN</Link>
        <Link to='/register' className="link-items">SIGNUP</Link></>
      }
    
      </div>
    </div>
    </div>
  );
};

export default Navbar;
