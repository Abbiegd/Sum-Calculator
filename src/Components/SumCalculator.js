import React, { useState } from 'react';

function SumCalculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const calculateSum = () => {
    if (!isNaN(number1) && !isNaN(number2)) {
      const sum = Number(number1) + Number(number2);
      setResult(`Result: ${sum}`);
    } else {
      setResult('Please enter valid numbers');
    }
  };

  return (
    <div className="calculator">
      <h2>Sum Calculator</h2>
      <input
        className="input1"
        type="text"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Enter number"
      />
      <h3> + </h3>
      <input
        className="input2"
        type="text"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Enter number"
      />
      <button onClick={calculateSum}>Calculate</button>
      <p id="result">{result}</p>
    </div>
  );
}

export default SumCalculator;

