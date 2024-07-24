import React, { useContext, useEffect, useState } from 'react';
import getUsers from './axiosURLs/getUsers';
import UserCard from './UserCard';


export function Users({setLoggedInUser}) {

   const [users, setUsers] = useState([]);
   

    useEffect(() => {
        getUsers().then((response) => {
        setUsers(response.data.users)
       
          })
    },[])

        
    //Card Click
    const handleUserClick = (username) => {
       setLoggedInUser(username)
    };


    return (
        
        <ul className='user-container'>
            {users.map((user) => (
               <UserCard 
               user={user}  
               key={user.username} 
               onUserClick={() => handleUserClick(user.username)}
               />
            ))}
        </ul>
    
    );
}