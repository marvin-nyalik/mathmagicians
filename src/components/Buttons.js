import PropTypes from 'prop-types';
import './Buttons.css';

const Buttons = ({ value }) => {
  if (value === '+' || value === '-' || value === 'x' || value === '\u00F7') {
    return <button className="operator-keys" type="button" key={value}>{value}</button>;
  }
  if (value === '0') {
    return <button className="zero-key" type="button" key={value}>{value}</button>;
  }
  return <button className="keys" type="button" key={value}>{value}</button>;
};

Buttons.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Buttons;
