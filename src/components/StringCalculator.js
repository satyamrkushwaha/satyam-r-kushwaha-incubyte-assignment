import React, { useState } from 'react';
import calculateString from '../utils/calculateString';


const StringCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);


    const handleChange = (event) => {
        setInput(event.target.value);
        console.log(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            const sum = calculateString(input);
            setResult(sum);
            setError(null);
        } catch (e) {
            setResult(null);
            setError(e.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={input}
                    onChange={handleChange}
                    rows="4"
                    cols="50"
                    placeholder="Enter numbers separated by commas or new lines"
                />
                <br />
                <button type="submit">Calculate</button>
            </form>
            {result !== null && <p>Result: {result}</p>}
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
        </div>
    );
};

export default StringCalculator;

