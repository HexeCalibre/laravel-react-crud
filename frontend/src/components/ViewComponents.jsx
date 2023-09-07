import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ViewComponents = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/crud/view`
    const controller = new AbortController()

    const requestOptions = {
      signal: controller.signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    setLoading(true)
    fetch(url, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      setUsers(json)
      setLoading(false)
    })
    .catch((err) => console.log(err))
    
    return () => {
      controller.abort()
    }
  }, [])
  return (
    <>
      <h1>View Page</h1>
      <p></p>

      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th>DATE CREATED</th>
            <th>DATE UPDATED</th>
            <th></th>
          </tr>
        </thead>
        <tbody> 
          {loading==true ? (
              <tr>
                <td colSpan={5}>Loading...</td>
              </tr>
            ) : (users &&
              users.map((user) => {
                return(
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.created_at}</td>
                    <td>{user.updated_at}</td>
                    <td><a href="/viewuser/{user.id}">For UserID: {user.id}</a></td>
                  </tr>
                )
            }))
          }
        </tbody>
      </table>
    </>
  );
};

export default ViewComponents;
