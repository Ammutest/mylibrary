import React, { useState } from 'react';
import './style.css';


const InputText = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");


  const validateName = (name) => {
    if (!name) {
      return "Name cannot be empty.";
    }
    if (name.length < 3) {
      return "Name must be at least 3 characters long.";
    }
    if (!isNaN(name)) {
      return "Name cannot be a number.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateName(name);

    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      console.log("Form submitted with name:", name);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Text
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit" style={{ backgroundColor: '#4caf50' }}>Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}
export default InputText;
