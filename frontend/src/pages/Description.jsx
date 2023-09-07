import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Description = () => {
    const {id} = useParams()
    const [ description, setDescription] = useState([])

    const handleChange = (e) => {
        setDescription(e.target.value)
    }

    useEffect((e) => {
        const url = `${import.meta.env.VITE_API_URL}/description/${id}`
        const controller = new AbortController();
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

    
  return (
    <>
        <h1>Edit Description</h1>
        {
            description.map((items) => (
                <p key={items.id}>
                    <input type="text" name="description" value={items.description} onChange={handleChange} />
                    <button type="submit">Save</button>
                </p>
            ))
        }
    </>
  )
}

export default Description