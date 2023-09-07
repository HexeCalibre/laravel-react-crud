import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {
    const {id} = useParams()
    const [ description, setDescription] = useState([])
    useEffect((e) => {
        const url = `${import.meta.env.VITE_API_URL}/description/${id}`
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url, requestOptions)
        .then((response) => response.json())
        .then(json => {
            setDescription(json)
        })
        .catch((err) => console.log(err))
    }, [])

    const handleChange = (e) => {

    }
  return (
    <>
        <h1>Description</h1>
        {
            description.map(
                (e) => (
                    <p key={e.id}>
                        <input type="text" name="description" value={e.description} onChange={handleChange} />
                    </p>
                )
            )
        }
    </>
  )
}

export default Description