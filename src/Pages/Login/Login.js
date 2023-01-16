import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {
  const {signIn}=useContext(AuthContext);
  const [error,setError]=useState('');
  const location=useLocation();
  const navigate=useNavigate();

  const from=location.state?.from?.pathname || '/'

  const handleSubmit =(event) =>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
   

    signIn(email,password)
    .then(result =>{
      const user=result.user;
      console.log(user);
      form.reset();
      setError('');
      navigate(from ,{replace:true})
    })
    .catch(error=>{
      console.error(error);
     setError(error.message)
    })
  }


    return (
        <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Email</label>
          <input className="loginInput" type="text" name='email' placeholder="Enter your email..." />
          <label>Password</label>
          <input className="loginInput" type="password" name='password' placeholder="Enter your password..." />
          <button className="loginButton">Login</button>
          <p className="text-danger">{error}</p>
        </form>
          <button className="loginRegisterButton">Register</button>
      </div>
    );
};

export default Login;