import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

test('renders Navigation component correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
