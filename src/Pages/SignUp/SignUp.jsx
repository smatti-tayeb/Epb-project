// Register.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  './SignUp.css';


const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
     
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);  
      setResponseMessage(response.data.message); 
      console.log(response.status);
      if (response.status=== 201) {
        navigate('/');
      };
    } catch (error) {
      setResponseMessage(error.response ? error.response.data.message : 'An error occurred');
    }
   
  };

  return (
    
  <div className='signup-container'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className='signup-form'>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <div>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
    </div>
  
  );
};

export default SignUp;
