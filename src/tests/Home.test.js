import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Test Home component', () => {
  it('Matches the snapshot', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
