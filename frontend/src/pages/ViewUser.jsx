import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewUser = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        id: "",
        name: "",
        created_at: ""
    })

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/crud/view/${id}`
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
          setUser(json)
          setLoading(false)
        })
        .catch((err) => console.log(err))
        
        return () => {
          controller.abort()
        }
    }, [])

  return (
    <>
        <h1>ViewUser {id}</h1>
        <p>{user.id}</p>
    </>

  )
}

export default ViewUser