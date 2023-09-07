import React from 'react'
import { useState } from 'react'

const CreateUser = () => {
    const [user, setUser] = useState("")
    const handleChange = (e) => {
        setUser(e.target.value)
    }
    const handleClick = (e) => {
        alert(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: "POST",
            "Content-Type": "application/json"
        }
    }
  return (
    <>
        <h1>CreateUser</h1>
        <form name="sampleForm" action="#" method="post" onSubmit={handleSubmit}>
            <input type="text" name="fullName" value={user} id="fullName" onChange={handleChange} required />
            <button type="submit" id="formSubmit">Save</button>
        </form>
    </>
  )
}

export default CreateUser