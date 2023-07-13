import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../components/Quote';

test('renders Quotes component correctly', () => {
  const { container } = render(<Quote />);
  expect(container.firstChild).toMatchSnapshot();
});
