<<<<<<< Updated upstream
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
=======
import { useState } from "react";

// Component's Name
const Create = () => {
  // Description's Textbox
  // Handle value for Description textbox
  // Class setter
  const [description, setDescription] = useState("");
  const descriptionHandleChange = (e) => {
    setDescription(e.target.value);
  };

  // Button Add Description
  // Tester if button everything is working
  const [message, setMessage] = useState("");
  const handleClick = () => {
    alert(`Button Clicked`);
    setMessage(`${description}`);
  };

  return (
    <>
      <h2>Create Description</h2>
      {/* <form> */}
        <input
          type="text"
          name="description"
          placeholder="type description here"
          onChange={descriptionHandleChange}
          required
        />
        <button onClick={handleClick}>Add</button> 
        <p>New Description Added: {message}</p>
      {/* </form> */}
    </>
  );
};

export default Create;
>>>>>>> Stashed changes
