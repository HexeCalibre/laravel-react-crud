import React, { useState } from 'react'

const WelcomeComponent = () => {
    const [message, setMessage] = useState("")
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")

    const [data, setData] = useState({
        firstName: "",
        lastName: ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(prev => {
            return {...prev, [name]: value }
        })
    }

    // const firstNameHandleChange = (e) => {
    //     setFirstName(e.target.value)
    // }

    // const lastNameHandleChange = (e) => {
    //     setLastName(e.target.value)
    // }

    const handleClick = (e) => {
        setMessage(`Hi ${data.firstName} ${data.lastName}!`)
    }
  return (
    <>
      <h1>Welcome Component</h1>
      <p>
        <label htmlFor="">First Name</label>
        <input type="text" name="firstName" id="firstName" value={data.firstName} onChange={handleChange} />
      </p>
      <p>
        <label htmlFor="">Last Name</label>
        <input type="text" name="lastName" id="lastName" value={data.lastName} onChange={handleChange} />
      </p>
      <p>
        <button onClick={handleClick}>Greet</button>
      </p>
      <p>{message}</p>
    </>
  )
}

export default WelcomeComponent
