 import { describe, test, expect } from 'vitest';
 import {  render,screen,waitFor } from '@testing-library/react';
 
 import userEvent from '@testing-library/user-event';
import Calculator from './components/Calculator';


describe('Calculator component', () => {
  test('renders minus button', () => {
    render(<Calculator />);
    const minusButton = screen.getByRole('button', { name: /-/i });
    expect(minusButton).toBeVisible();
  });

test('renders plus button', () => {
  render(<Calculator />);
  let plusButton = screen.getByRole('button', {name: /\+/i })
    expect(plusButton).toBeInTheDocument();
});

test('renders button with label "5"', () => {
  render(<Calculator />);
  let Button5 = screen.getByRole('button', {name: /5/i })
    expect(Button5).toBeInTheDocument();
});

test('renders button with label "1"', () => {
  render(<Calculator />);
  let Button1 = screen.getByRole('button', {name: /1/i })
    expect(Button1).toBeInTheDocument();
});
test('renders button with label "9"', () => {
  render(<Calculator />);
  let Button9 = screen.getByRole('button', {name: /9/i })
    expect(Button9).toBeInTheDocument();
});

test('renders equal button', () => {
  render(<Calculator />);
  let equalButton = screen.getByRole('button', {name: /=/i })
    expect(equalButton).toBeInTheDocument();
});

test('renders divide button', () => {
  render(<Calculator />);
  let divideButton = screen.getByRole('button', {name: /\//i })
    expect(divideButton).toBeInTheDocument();
});

test('renders multiply button', () => {
  render(<Calculator />);
  let multiplyButton = screen.getByRole('button', {name: /\*/i })
    expect(multiplyButton).toBeInTheDocument();
});

test('renders clear button', () => {
  render(<Calculator />);
  let ClearButton = screen.getByRole('button', {name: /C/i })
    expect(ClearButton).toHaveValue('');
});


test('renders the input on the screen', () => {
  render(<Calculator />);
  let input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument();


});

test('empty input', () => {
  render(<Calculator/>)
  const emptyInput = screen.getByRole('textbox')
  expect (emptyInput).toHaveValue('');
});


  

test('handles plus operation', async () => {
  render(<Calculator />);
  
  const input = screen.getByRole('textbox');

  await userEvent.click(screen.getByText('1'));
  await userEvent.click(screen.getByText('+'));
  await userEvent.click(screen.getByText('2'));
  await userEvent.click(screen.getByText('+'));
  await userEvent.click(screen.getByText('3'));
  await userEvent.click(screen.getByText('='));

  // Wait for the result to be displayed
  await waitFor(() => {
    expect(input).toHaveValue('6');
  });
});


test('handles diveded operation', async () => {
  render(<Calculator />);
  
  const input = screen.getByRole('textbox');

  await userEvent.click(screen.getByText('8'));
  await userEvent.click(screen.getByText('/'));
  await userEvent.click(screen.getByText('2'));
  
  await userEvent.click(screen.getByText('='));

  // Wait for the result to be displayed
  await waitFor(() => {
    expect(input).toHaveValue('4');
  });
});

test('handles multiply operation', async () => {
  render(<Calculator />);
  
  const input = screen.getByRole('textbox');

  await userEvent.click(screen.getByText('8'));
  await userEvent.click(screen.getByText('*'));
  await userEvent.click(screen.getByText('2'));
  
  await userEvent.click(screen.getByText('='));

  // Wait for the result to be displayed
  await waitFor(() => {
    expect(input).toHaveValue('16');
  });
});

test('handles minus operation', async () => {
  render(<Calculator />);
  
  const input = screen.getByRole('textbox');

  await userEvent.click(screen.getByText('9'));
  await userEvent.click(screen.getByText('-'));
  await userEvent.click(screen.getByText('2'));
  
  await userEvent.click(screen.getByText('='));

  // Wait for the result to be displayed
  await waitFor(() => {
    expect(input).toHaveValue('7');
  });
});

test('handles multiply operation with wrong result', async () => {
  render(<Calculator />);
  
  const input = screen.getByRole('textbox');

  await userEvent.click(screen.getByText('8'));
  await userEvent.click(screen.getByText('*'));
  await userEvent.click(screen.getByText('2'));
  await userEvent.click(screen.getByText('='));

  // Wait for the result to be displayed
  await waitFor(() => {
    expect(input).not.toHaveValue('15');
  });
});

test('handles clear result ', async () => {
  render(<Calculator />);
  
  const input = screen.getByRole('textbox');

  await userEvent.click(screen.getByText('8'));
  await userEvent.click(screen.getByText('*'));
  await userEvent.click(screen.getByText('2'));
  await userEvent.click(screen.getByText('='));
  await userEvent.click(screen.getByText('C'));
  // Wait for the result to be displayed
  await waitFor(() => {
    expect(input).toHaveValue('');
  });
});




})