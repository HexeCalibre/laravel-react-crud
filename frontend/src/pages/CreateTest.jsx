import { useState } from "react";

// Component's Name
const CreateTest = () => {
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

export default CreateTest;