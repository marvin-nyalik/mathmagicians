import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

import Layout from '../components/Layout';

test('renders Layout component correctly', () => {
  const { container } = render(
    <MemoryRouter>
      {/* Wrap the Layout component with MemoryRouter */}
      <Layout />
    </MemoryRouter>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
