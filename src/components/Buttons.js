import PropTypes from 'prop-types';
import './Buttons.css';

const Buttons = ({ value, handleInput }) => {
  if (value === '+' || value === '=' || value === '-' || value === 'x' || value === '\u00F7') {
    return <button className="operator-keys" type="button" onClick={handleInput} key={value}>{value}</button>;
  }
  if (value === '0') {
    return <button className="zero-key" type="button" onClick={handleInput} key={value}>{value}</button>;
  }
  return <button className="keys" type="button" onClick={handleInput} key={value}>{value}</button>;
};

Buttons.propTypes = {
  value: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default Buttons;
