import React from 'react';
import {render} from 'react-testing-library';
import App from './App';

test('renders app', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("app")).toBeDefined();
});
