import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home=({userDetails,setUserDetails})=>{
    const [isEditing,setIsEditing]=useState(false)
    const [formData,setFormData]=useState(userDetails)
    const navigate = useNavigate();
   
   
    if(!userDetails){
        return <h1>Please login or Register to view this page</h1>
    }
    



const handleEditClick=()=>{
    setIsEditing(true)
}
const handleCancelClick=()=>{
    setIsEditing(false)
}
const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.name]:[e.target.value]
    })
}
const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/users/update/${userDetails.id}`, formData); // Replace with your API endpoint
      setUserDetails(response.data);
      setIsEditing(false);
    } catch (err) {
      console.error('Failed to update user:', err);
    }
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/users/delete/${userDetails.id}`);
      setUserDetails(null); // Clear the user state
      navigate('/'); // Redirect to the registration page
    } catch (err) {
      console.error('Failed to delete user:', err);
    }
  };

    return(
        <>
        <h2>Welcome {userDetails.name}</h2>

        {    !isEditing? (
            <>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Phone Number:</strong> {userDetails.phoneNumber}</p>
            <p><strong>Address:</strong> {userDetails.address}</p>
            <button onClick={handleEditClick} style={{ position: 'absolute', top: 20, right: 20 }}>Edit</button>
            </>
        ) :(
            <form onSubmit={handleSave}>
                <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>
          <label>
            Address:
            <input type="text" name="text" value={formData.address} onChange={handleChange} required />
          </label>
          <button type='submit' >Save</button>
          <button onClick={handleCancelClick} style={{ position: 'absolute', top: 20, right: 20 }}>Cancel</button>
            </form>
        )}
        <button onClick={handleDelete} style={{ position: 'absolute', bottom: 20, right: 20 }}>
        Delete Account
      </button>
        </>
    )}
export default Home
