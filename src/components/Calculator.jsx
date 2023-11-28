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
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly/>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleClick('1')} className="operator" aria-label="1">1</button>
          <button onClick={() => handleClick('4')} className="operator" aria-label="4">4</button>
          <button onClick={() => handleClick('7')} className="operator" aria-label="7">7</button>
          <button onClick={() => handleClick('+')} className="operator" aria-label="+">+</button>
        </div>
        <div className="row">
          
          <button onClick={() => handleClick('2')} className="operator" aria-label="2">2</button>
          <button onClick={() => handleClick('5')} className="operator" aria-label="5">5</button>
          <button onClick={() => handleClick('8')} className="operator" aria-label="8">8</button>
          <button onClick={() => handleClick('-')} className="operator minus" aria-label="-">-</button>
        </div>
        <div className="row">
          
          <button onClick={() => handleClick('3')} className="operator" aria-label="3">3</button>
          <button onClick={() => handleClick('6')} className="operator" aria-label="6">6</button>
          <button onClick={() => handleClick('9')} className="operator" aria-label="9">9</button>
          <button onClick={() => handleClick('*')} className="operator multiply" aria-label="*">*</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('0')} className="operator" aria-label="0">0</button>
          <button onClick={handleClear} className="clear" aria-label="C">C</button>
          <button onClick={handleCalculate} className="equal" aria-label="=">=</button>
          <button onClick={() => handleClick('/')} className="operator divide" aria-label="/">/</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator