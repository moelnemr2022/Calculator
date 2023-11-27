 //import { describe, it, expect } from 'vitest';

import { render,screen } from '@testing-library/react';
 //import userEvent from '@testing-library/user-event';

import { test, expect } from 'vitest';
import App from './App';

test('renders headline of the app', () => {
  render(<App />);
  const header = screen.getByRole('heading', { name: /React Calculator/i });
  expect(header).toBeInTheDocument();


});