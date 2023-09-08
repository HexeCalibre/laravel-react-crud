import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Component's Name
const CreateTest = () => {
  // Description's Textbox
  // Handle value for Description textbox
  // Class setter
  const [description, setDescription] = useState("");
  // This section has been encapsulated directly to the <input> element tag
  //   const descriptionHandleChange = (e) => {
  //     setDescription(e.target.value);
  //   };

  // URL function
  const navigate = useNavigate();

  // Form Submission
  const onSubmit = (e) => {
    e.preventDefault();
    const url = `${import.meta.env.VITE_API_URL}/create`;

    //HTTP Request Method
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Object literal
      // Use the 'description' variable from state
      body: JSON.stringify({
        description: description,
      }),
    };

    // API request & response
    fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/view");
      })
      .catch((err) => console.error(err));
  };

  // Button Add Description
  // Tester button if everything is working
  const [message, setMessage] = useState("");
  const handleClick = () => {
    alert(`Button Clicked`);
    console.log(`New Description Added: ${description}`);
    setMessage(`${description}`);
  };

  // GUI Render
  return (
    <>
      <h2>Create Description</h2>
      <form className="add-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Add Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" value="Save Task">
          Save
        </button>
        <p>New Description Added: {message}</p>
      </form>
    </>
  );
};

export default CreateTest;
