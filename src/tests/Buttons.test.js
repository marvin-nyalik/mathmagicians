import { render, fireEvent } from '@testing-library/react';
import Buttons from '../components/Buttons';

describe('Tests for the Button component', () => {
  const value = '+';
  const handleInput = jest.fn();

  it('The button matches the snapshot', () => {
    const { container } = render(<Buttons value={value} handleInput={handleInput} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the correct inner text', () => {
    const value = '9';
    const { getByText } = render(<Buttons value={value} handleInput={handleInput} />);
    const renderedBtn = getByText(value);
    expect(renderedBtn).toBeTruthy();
  });

  it('calls the handleInput function when clicked', () => {
    const { getByText } = render(<Buttons value="0" handleInput={handleInput} />);
    const button = getByText('0');
    fireEvent.click(button);
    expect(handleInput).toHaveBeenCalledTimes(1);
  });
});
