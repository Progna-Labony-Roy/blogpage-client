import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Register.css'

const Register = () => {
  const { createUser ,updateUserProfile} = useContext(AuthContext);
  const [error,setError]=useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        handleUpdateUserProfile(name )
      })
      .catch((error) => {
        console.error(error);
        setError(error.message)
      });
  };

  const handleUpdateUserProfile=(name)=>{
    const profile={
      displayName:name ,
    }
    updateUserProfile(profile)
    .then( ()=>{})
    .catch(error => console.error(error));
  }

    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="registerInput" type="text" name='name' placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" name='email' placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" name='password' placeholder="Enter your password..." />
        <button className="registerButton">Signup</button>
        <p className="text-danger">{error}</p>
      </form>
        <button type='submit'
    className="registerLoginButton">Login</button>
    </div>
    );
};

export default Register;