import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator component tests', () => {
  it('Matches the snapshot', () => {
    const { container } = render(<Calculator />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
