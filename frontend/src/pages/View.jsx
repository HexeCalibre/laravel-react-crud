import React, { useEffect, useState } from 'react'

const View = () => {
    const [items, setItems] = useState([])
    // const [deleteId, setDeleteId] = useState('')

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/view`

        const requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(url, requestOptions)
        .then((response) => response.json())
        .then(json => {
            setItems(json)
        })
        .catch((err) => console.log(err))

    }, [])

    const [deleteId, setDeleteId] = useState('')
    const handleDelete = (e) => {
        setDeleteId(deleteId)
    }

    const handleSubmit = (e) => {
        const url = `${import.meta.env.VITE_API_URL}/delete/${deleteId}`
        console.log(url)
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: deleteId
            })
        }

        fetch(url, requestOptions)
        .then((response) => response.json())
        .then((json) =>
            console.log(json),
            // navigate('/view')
        )
        .catch((err) => console.log(err))
    }
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>DESCRIPTION</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(
                        (e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.description}</td>
                                <td><a href={(`/description/${e.id}`)}>Edit</a></td>
                                <td>
                                    <form onSubmit={handleSubmit}>
                                        <button id={e.id} type='submit' onClick={handleDelete}>Delete</button>
                                    </form>
                                </td>
                            </tr>
                        )
                    )
                }                
            </tbody>
        </table>
    </>
  )
}

export default View