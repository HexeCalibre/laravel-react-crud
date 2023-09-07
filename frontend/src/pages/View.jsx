import React, { useEffect, useState } from 'react'

const View = () => {
    const [items, setItems] = useState([])

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
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>DESCRIPTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(
                        (e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.description}</td>
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