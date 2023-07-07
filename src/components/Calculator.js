import { useState } from 'react';
import Button from './Buttons';
import CalculatorCSS from './Calculator.module.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = result;

  const handleInput = (e) => {
    const value = e.target.innerHTML;
    setResult(calculate(result, value));
  };

  const btnValues = ['AC', '+/-', '%', '\u00F7', '7', '8', '9',
    'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className={CalculatorCSS.container}>
      <div className={CalculatorCSS.outputresult}>{`${total || '0'}${operation || ''}${next || ''}`}</div>
      <div className={CalculatorCSS.keyscontainer}>
        <div className={CalculatorCSS.calckey}>
          { btnValues.map((value) => (
            <Button
              key={value}
              value={value}
              handleInput={handleInput}
            />
          )) }
        </div>
      </div>
    </div>
  );
};

export default Calculator;
