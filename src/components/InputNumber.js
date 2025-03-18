import React, { useState } from 'react';
import './Style.css';

const InputNumber=()=> {
  const [number, setNumber] = useState('');
    const [error, setError] = useState('');

  const validateNumber = (number) => {
    if (!number) {
      return "Number cannot be empty.";
    }
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateNumber(number);

    if (validationError) {
      setError(validationError); 
    } else {
      setError(""); 
      console.log("Form submitted with a number:", number);
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Number
          <input
            id="number"
            type="number"
            value={number} 
            onChange={(e) => setNumber(e.target.value)} 
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>} 
    </>
  );
}
export default InputNumber;
