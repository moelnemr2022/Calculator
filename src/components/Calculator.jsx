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
    try {
      const result = eval(input);
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
          <button onClick={() => handleClick('1')} className="operator">1</button>
          <button onClick={() => handleClick('4')} className="operator">4</button>
          <button onClick={() => handleClick('7')} className="operator">7</button>
          <button onClick={() => handleClick('+')} className="operator">+</button>
        </div>
        <div className="row">
          
          <button onClick={() => handleClick('2')} className="operator">2</button>
          <button onClick={() => handleClick('5')} className="operator">5</button>
          <button onClick={() => handleClick('8')} className="operator">8</button>
          <button onClick={() => handleClick('-')} className="operator minus">-</button>
        </div>
        <div className="row">
          
          <button onClick={() => handleClick('3')} className="operator">3</button>
          <button onClick={() => handleClick('6')} className="operator">6</button>
          <button onClick={() => handleClick('9')} className="operator">9</button>
          <button onClick={() => handleClick('*')} className="operator multiply">*</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('0')} className="operator">0</button>
          <button onClick={handleClear} className="clear">C</button>
          <button onClick={handleCalculate} className="equal">=</button>
          <button onClick={() => handleClick('/')} className="operator divide">/</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator