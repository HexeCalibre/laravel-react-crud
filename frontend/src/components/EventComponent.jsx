import React, { useState } from 'react'

const EventComponent = () => {
    const handleClick = (e) => {
        const buttonId = e.target.id
        console.log(`${buttonId} is clicked!`)
        alert(`${buttonId} is clicked!`)
    }

    const [allValue, setAllValue] = useState("")
    const handleChange = (e) => {
        setAllValue(e.target.value)
        // console.log(`${e.target.id} = ${e.target.value}`)
    }
  return (
    <>
      <h1>Event Component</h1>
      <p>
        <label htmlFor="">All Value</label>
        <input type="text" name="allValue" id="allValue" value={allValue} onChange={handleChange} />
      </p>
      <p>
        <label htmlFor="">First Name</label>
        <input type="text" name="firstName" id="firstName" onChange={handleChange} />
      </p>
      <p>
        <label htmlFor="">Last Name</label>
        <input type="text" name="lastName" id="lastName" onChange={handleChange} />
      </p>
      <p>
        <button id="button1" onClick={handleClick}>Button 1</button>
      </p>
      <p>
        <button id="button2" onClick={(e) => alert(`${e.target.id} is clicked!`)}>Button 2</button>
      </p>
    </>
  )
}

export default EventComponent
