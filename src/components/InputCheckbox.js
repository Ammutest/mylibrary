import React, { useState } from 'react';
import './Style.css';

const InputCheckbox = () => {
    const [arr, setArr] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');


    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {
            setSelectedItems([...selectedItems, value]);
        } else {
            setSelectedItems(selectedItems.filter((item) => item !== value));
        }
    };


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (arr.length === 0 || selectedItems.length === 0) {
            setError('Please select at least one option.');
        } else {
            setError('');
            alert('Form submitted with selected items: ' + selectedItems.join(', '));
        }
    };


    const handleSetOptions = (event) => {
        event.preventDefault();

        if (inputValue.trim() === '') {
            setError('Please enter at least one option.');
            return;
        }

        const options = inputValue.split(',').map(item => item.trim());
        setArr(options);
        setInputValue('');
        setError('');
    };

    return (
        <>

            <form onSubmit={handleSetOptions}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter options separated by commas"
                />
                <button type="submit">Set Options</button>
            </form>
            <form onSubmit={handleSubmit}>
                {arr.map((item) => (
                    <div key={item}>
                        <input
                            type="checkbox"
                            id={item}
                            name={item}
                            value={item}
                            onChange={handleCheckboxChange}
                        />
                        <label>{item}</label>
                    </div>
                ))}
                <br />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {arr.length > 0 && (
                    <button type="submit">Submit</button>
                )}
            </form>
        </>
    );
}
export default InputCheckbox;
