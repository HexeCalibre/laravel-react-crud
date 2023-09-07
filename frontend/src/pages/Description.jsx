import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Description = () => {
    const {id} = useParams()
    const [item, setItem] = useState([
        id => 0,
        description => ""
    ])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    useEffect(() => {
        const url = `http://localhost:8000/api/description/${id}`
        const controller = new AbortController();
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
            setItem(json)
            setLoading(false)
        })
        .catch((err) => console.log(err))
        return () => {
            controller.abort()
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const url = `http://localhost:8000/api/edit/${id}`

        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: item.id,
                description: item.description
            })
        }

        fetch(url, requestOptions)
        .then((response) => response.json())
        .then((json) => {
            // console.log(json)
            console.log(json)
            navigate('/view')
        })
        .catch((err) => console.log(err))
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setItem(prev => {
            return {...prev, [name]: value }
        })
    }

  return (
    <>
        <h1>Edit Description {item.id}</h1>
        {loading ? (<strong>Loading</strong>) : (
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" value={item.description} onChange={handleChange} />
            <button type="submit">Save</button>
        </form>
        )}
    </>
  )
}

export default Description
