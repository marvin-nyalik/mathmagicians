import Button from './Buttons';
import './Calculator.css';

const Calculator = () => {
  const btnValues = ['AC', '+/-', '%', '\u00F7', '7', '8', '9',
    'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="container">
      <div className="output-result">0</div>
      <div className="keys-container">
        <div className="calc-key">
          { btnValues.map((value) => (<Button key={value} value={value} />))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
