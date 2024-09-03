import React, { useEffect, useState } from 'react'

const Users = () => {

const [users,setUsers]=useState([])

useEffect(()=>{
    handleUsers()
},[])

    const handleUsers = async () => {
        try {
          const response = await axios.get('http://localhost:8083/user-process');
          setBooks(response.data);
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      };


  return (
    <><h2>Users</h2>
    <ol>
        {users.map(user=>(
            <li key={user.id}>
                
            </li>
        ))

        }
    </ol>
    </>
  )
}

export default Users