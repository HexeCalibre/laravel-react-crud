import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [description, setDescription] = useState(
        {description: ""}
    )
    const navigate = useNavigate()
    const handleChange = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const url = `${import.meta.env.VITE_API_URL}/create`
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                description: description
            })
        }

        fetch(url, requestOptions)
        .then((response) => response.json())
        .then(
            navigate('/view')
        )
        .catch((err) => console.log(err))
    }
  return (
    <>
        <h1>Create</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" onChange={handleChange} />
            <button type="submit">Save</button>
        </form>
    </>
  )
}

export default Create
