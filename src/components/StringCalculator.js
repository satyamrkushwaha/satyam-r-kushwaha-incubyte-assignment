import React, { useState } from 'react';


const StringCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);


    const handleChange = (event) => {
        setInput(event.target.value);
        console.log(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       
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
        </div>
    );
};

export default StringCalculator;

