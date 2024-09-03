import React from "react";

const Home=({userDetails})=>{
    if(!userDetails){
        return <h1>Please login or Register to view this page</h1>
    }


    return(
        <>
        <h2>Welcome {userDetails.name}</h2>
        <p>User Id:{userDetails.id}</p>
        <p>Email:{userDetails.email}</p>
        <p>Address: {userDetails.address}</p>
        </>
    )
}
export default Home
