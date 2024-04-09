// SignIn.js

import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css'
import {useNavigate,redirect } from 'react-router-dom';
import { useAuth } from '../../auth/authContext';




const SignIn = () => {
  const { signIn } = useAuth();
  const [responseMessage, setResponseMessage] = useState('');
  const [user, setFormData] = useState({
    email: '',
    password: ''
  });
  const [userResponse , setUserResponse] =useState({
    "id":null,
    "email":null,
    "token":null,
    "username":null
  } );
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', user);
      if(response.status === 200){
       const data=response.data;
       setUserResponse({
      id:data.id,
    email:data.email,
    token:data.token,
    username:data.username});
    await localStorage.setItem('USER',JSON.stringify({
    id:data.id,
    email:data.email,
    token:data.token,
    username:data.username}));
   await signIn(response.data);
    navigate("/");
      }
      
    } catch (error) {
      setResponseMessage(error.response ? error.response.data.message : 'An error occurred');

    }

    
  };

  return (
    <>
   
    <div className='signin-container'>
      <h2>Sign In  </h2>
      <form onSubmit={handleSubmit} className='signin-form'>
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
        <button type="submit">'Sign In'</button> 
      </form>
      <h2>
        {responseMessage}
      </h2>
    </div>
    </>
  );
};

export default SignIn;
