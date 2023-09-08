import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  // Tester button if everything is working
  const [message, setMessage] = useState("");
  const handleClick = () => {
    alert(`Button Clicked`);
    console.log(`New Description Added: ${description}`);
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
      <button type="submit" onClick={handleClick}>
        Save
      </button>
      <p>New Description Added: {message}</p>
      {/* </form> */}
    </>
  );
};

export default CreateTest;
