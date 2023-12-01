import { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    console.log('handleCalculate');
  
    try {
      // Replace % with *0.01 for percentage calculation
      let expression = input.replace(/%/g, '*0.01');
      
      // Handle parentheses for evaluation
      const parenthesesBalanced = (str) => {
        const stack = [];
        for (let char of str) {
          if (char === '(') stack.push('(');
          else if (char === ')') {
            if (stack.length === 0) return false;
            stack.pop();
          }
        }
        return stack.length === 0;
      };

      if (!parenthesesBalanced(expression)) {
        setInput('Error');
        return;
      }

// using eval to calculate the result and updates the input.
      const result = eval(expression);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }

  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleClick('1')} className="operator" aria-label="1">1</button>
          <button onClick={() => handleClick('4')} className="operator" aria-label="4">4</button>
          <button onClick={() => handleClick('7')} className="operator" aria-label="7">7</button>
          <button onClick={() => handleClick('/')} className="operator divide" aria-label="/">/</button>
          <button onClick={() => handleClick('+')} className="operator plus" aria-label="+">+</button>


        </div>
        <div className="row">

          <button onClick={() => handleClick('2')} className="operator" aria-label="2">2</button>
          <button onClick={() => handleClick('5')} className="operator" aria-label="5">5</button>
          <button onClick={() => handleClick('8')} className="operator" aria-label="8">8</button>
          <button onClick={() => handleClick('-')} className="operator minus" aria-label="-">-</button>
          <button onClick={() => handleClick('(')} className="operator left Parentheses" aria-label="(">(</button>

        </div>
        <div className="row">

          <button onClick={() => handleClick('3')} className="operator" aria-label="3">3</button>
          <button onClick={() => handleClick('6')} className="operator" aria-label="6">6</button>
          <button onClick={() => handleClick('9')} className="operator" aria-label="9">9</button>
          <button onClick={() => handleClick('*')} className="operator multiply" aria-label="*">*</button>
          <button onClick={() => handleClick(')')} className="operator right Parentheses" aria-label=")">)</button>

        </div>
        <div className="row">
          <button onClick={() => handleClick('0')} className="operator" aria-label="0">0</button>
          <button onClick={handleClear} className="clear" aria-label="C">C</button>
          <button onClick={handleCalculate} className="equal" aria-label="=">=</button>
          <button onClick={() => handleClick('.')} className="operator dot" aria-label=".">.</button>
          <button onClick={() => handleClick('%')} className="operator percentage" aria-label="%">%</button>



        </div>
      </div>
    </div>
  );
}

export default Calculator