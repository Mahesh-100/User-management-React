import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = ({setUserDetails}) => {
  const [user, setUser] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    address: ''
  });

const navigate=useNavigate()

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/users", user);
      console.log(response.data);
      
      setUserDetails(response.data)
      navigate('/home')
    } catch (err) {
      console.error('Error occurred:', err.response ? err.response.data : err.message);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={user.name}
            onChange={handleChange}
            placeholder='Enter your name'
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type='text'
            name='phoneNumber'
            value={user.phoneNumber}
            onChange={handleChange}
            placeholder='Enter your phone number'
            required
          />
        </label>
        <label>
          Email:
          <input
            type='text'
            name='email'
            value={user.email}
            onChange={handleChange}
            placeholder='Enter your email'
            required
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={user.password}
            onChange={handleChange}
            placeholder='Enter your password'
            required
          />
        </label>
        <label>
          Address:
          <input
            type='text'
            name='address'
            value={user.address}
            onChange={handleChange}
            placeholder='Enter your address'
            required
          />
        </label>
        <button type='submit'>Register</button>
      </form>
    </>
  );
}

export default Register;
