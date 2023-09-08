import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Delete = () => {
    const id = useParams(id)
    const navigate = useNavigate()
    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/delete/${id}`
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url, requestOptions)
        .then((response) => response.json())
        .then(
            navigate('/view')
        )
    }, [])
  return (
    <>

    </>
  )
}

export default Delete