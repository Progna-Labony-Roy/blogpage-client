import React, { useRef } from 'react';
import './Contact.css';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_h8blw8w",
        "template_mka0hfl",
        form.current,
        "AtXX8i6MtucT3D9P1"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Email has sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact-form'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='submit-button' type="submit" value="Send" />
    </form>
  </div>
  );
};

export default Contact;