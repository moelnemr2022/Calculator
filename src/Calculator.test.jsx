 //import { describe, it, expect } from 'vitest';

 import { render,screen } from '@testing-library/react';
 //import { render, screen } from '@testing-library/react';
 //import userEvent from '@testing-library/user-event';

import { test, expect } from 'vitest';
import Calculator from './components/Calculator';



test('renders headline of the app', () => {
  render(<Calculator />);
  let button = screen.getByRole('button', {name: /-/i })
    expect(button).toBeInTheDocument();


});
test('renders the input on the screen', () => {
  render(<Calculator />);
  let input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument();


});

test('renders headline of the app', () => {
  render(<Calculator />);
  let button = screen.getByRole('button', {name: /5/i })
  let input = screen.getByRole('textbox')
    expect(button).toBeInTheDocument();
expect(input).toBeInTheDocument()

});
