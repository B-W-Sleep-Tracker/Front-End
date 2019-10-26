import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axioswithAuth';

const UserList = () => {
    const [user, setUser] = useState ([]);
    useEffect(() => {
      const getUsers =() => {
      axiosWithAuth() 
        .get("/users/")
        .then(response => {
          setUser(response.data);
          console.log(response);
        });
      }

      getUsers();
    }, [])
    return( 
      <div className="user-list">
        {user.map(u => (
          <div className="users">
            <ul key={u.name} u={u} className="list">
              <li>{u.username}</li>                             
            </ul>
          </div>
          ))}

        </div>
    );
}

export default UserList;