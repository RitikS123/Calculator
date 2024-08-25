import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0');

  const calculateResult = () => {
    try {
      const operators = ['+', '-', '*', '/'];
      let operator = null;

      // Find the operator in the input
      for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
          operator = input[i];
          break;
        }
      }

      // If no operator is found, return the input as a number
      if (!operator) {
        setInput(parseFloat(input).toString());
        return;
      }
      

      const [operand1, operand2] = input.split(operator).map(parseFloat);

      let result;

      switch (operator) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '/':
          result = operand1 / operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        default:
          throw new Error('Error');
      }

      setInput(result);
    } catch (err) {
      setInput('Error');
    }
  };

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('0');
    } else if (value === 'R') {
      setInput(input.slice(0, -1) || '0');
    } else if (value === '=') {
      calculateResult();
    } else {
      setInput((prevValue) => (prevValue === '0' ? value : prevValue + value));
    }
  };

  return (
    <div className="App" style={{ marginTop: 40, marginLeft: 40 }}>
      <div className="screen" style={{ color: 'white', overflowX: 'scroll', fontSize: 15 }}>
        {input}
      </div>
      <div className="btn-con">
        <div style={{ width: 150, paddingBottom: 3 }}>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('C')}>C</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('R')}>R</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('%')}>%</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div style={{ width: 150, paddingBottom: 3 }}>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('7')}>7</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('8')}>8</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('9')}>9</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div style={{ width: 150, paddingBottom: 3 }}>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('4')}>4</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('5')}>5</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('6')}>6</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div style={{ width: 150, paddingBottom: 3 }}>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('1')}>1</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('2')}>2</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('3')}>3</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div style={{ width: 150, paddingBottom: 3 }}>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('0')}>0</button>
          <button className="btn" style={{ marginRight: 2 }} onClick={() => handleButtonClick('.')}>.</button>
          <button className="btn2" style={{ marginRight: 2 }} onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
