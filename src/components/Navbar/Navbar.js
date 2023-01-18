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
        <a target="_blank" className="nav-icons" href="https://www.facebook.com/"><i className="fa-brands fa-square-facebook"></i></a>
        <a target="_blank" className="nav-icons" href="https://www.pinterest.com/"><i className="fa-brands fa-square-pinterest"></i></a>
        <a target="_blank" className="nav-icons" href="https://www.instagram.com/"><i className="fa-brands fa-square-instagram"></i></a>
      </div>
      <div className="nav-items">
        <Link to='/' className="link-items">HOME</Link>
        <Link to='/profile' className="link-items">PROFILE</Link>
        <Link to='/about' className="link-items">ABOUT</Link>
       
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
