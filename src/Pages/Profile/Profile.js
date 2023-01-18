import React from "react";
import Contact from "../Contact/Contact";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="contact-form">
       <div className="information">
       <p className="my-information">
          Name :<span className="info"> Progna Labony Roy</span>
        </p>
        <p className="my-information">
          Email : <span className="info"> labony.progna@gmail.com</span>
        </p>
        <p className="my-information">
          Contact number : <span className="info">+88 01761394546</span>
        </p>
        <p className="my-information">
          Whatsapp number :<span className="info">+91 9641071022</span>
        </p>
        <div className="socials">
        <a
          className="social-links"
          href="https://github.com/Progna-Labony-Roy"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="social-links"
          href="https://www.linkedin.com/in/progna-labony-roy/"
          target="_blank"
        >
          LinkedIn
        </a>
        </div>
       </div>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Profile;
