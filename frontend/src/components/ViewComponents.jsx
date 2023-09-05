import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ViewComponents = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8000/api/crud/view')
    .then((res) => res.json())
    .then((users) => setUsers(users))
    setLoading(false)
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
                return  <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.created_at}</td>
                          <td>{user.updated_at}</td>
                          <td><button>For UserID: {user.id}</button></td>
                        </tr>
            }))
          }
        </tbody>
      </table>
    </>
  );
};

export default ViewComponents;
