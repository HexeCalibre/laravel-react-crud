import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/crud/view`

        const requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch(url, requestOptions)
        .then((response) => response.json())
        .then(json => {
            setUsers(json)
        })
        .catch((err) => console.log(err))
    }, [])
  return (
    <>
      <h1>User List</h1>
      <table border="1">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(
                    (e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td><button>View</button></td>
                        </tr>
                    )
                )
            }
            
        </tbody>
      </table>
    </>
  )
}

export default UserList
