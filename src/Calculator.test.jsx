import { describe, test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import Calculator from './components/Calculator';


describe('Calculator component', () => {

  test('renders minus button', () => {
    render(<Calculator />);
    const minusButton = screen.getByRole('button', { name: /-/i });
    expect(minusButton).toBeInTheDocument();
  });

  test('renders plus button', () => {
    render(<Calculator />);
    const plusButton = screen.getByRole('button', { name: /\+/i });
    expect(plusButton).toBeInTheDocument();

  });

  test('renders button with label "5"', () => {
    render(<Calculator />);
    const Button5 = screen.getByRole('button', { name: /5/i })
    expect(Button5).toBeInTheDocument();
  });

  test('renders button with label "1"', () => {
    render(<Calculator />);
    const Button1 = screen.getByRole('button', { name: /1/i })
    expect(Button1).toBeInTheDocument();
  });
  test('renders button with label "9"', () => {
    render(<Calculator />);
    const Button9 = screen.getByRole('button', { name: /9/i })
    expect(Button9).toBeInTheDocument();
  });

  test('renders equal button', () => {
    render(<Calculator />);
    const equalButton = screen.getByRole('button', { name: /=/i })
    expect(equalButton).toBeInTheDocument();
  });

  test('renders divide button', () => {
    render(<Calculator />);
    const divideButton = screen.getByRole('button', { name: /\//i })
    expect(divideButton).toBeInTheDocument();
  });

  test('renders multiply button', () => {
    render(<Calculator />);
    const multiplyButton = screen.getByRole('button', { name: /\*/i })
    expect(multiplyButton).toBeInTheDocument();
  });

  test('renders clear button', () => {
    render(<Calculator />);
    const ClearButton = screen.getByRole('button', { name: /C/i })
    expect(ClearButton).toHaveValue('');
  });


  test('renders the input on the screen', () => {
    render(<Calculator />);
    let input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument();
  });

  test('empty input', () => {
    render(<Calculator />)
    const emptyInput = screen.getByRole('textbox')
    expect(emptyInput).toHaveValue('');
  });




  test('handles plus operation', async () => {
    render(<Calculator />);


    await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('='));

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('6');
    });

  });



  test('handles diveded operation', async () => {
    render(<Calculator />);


    await userEvent.click(screen.getByText('8'));
    await userEvent.click(screen.getByText('/'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('='));

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('4');
    });
  });

  test('handles multiply operation', async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText('8'));
    await userEvent.click(screen.getByText('*'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('='));

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('16');
    });

  });

  test('handles minus operation', async () => {
    render(<Calculator />);


    await userEvent.click(screen.getByText('9'));
    await userEvent.click(screen.getByText('-'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('='));

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('7');
    });

  });

  test('handles multiply operation with wrong result', async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText('8'));
    await userEvent.click(screen.getByText('*'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('='));

    await waitFor(() => {
      expect(screen.getByRole('textbox')).not.toHaveValue('10');
    });

  });

  test('handles clear result ', async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText('8'));
    await userEvent.click(screen.getByText('*'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('='));
    await userEvent.click(screen.getByText('C'));

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('');
    });

  });


  test('handles calculation error gracefully', async () => {
    render(<Calculator />);

    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('/'));
    await userEvent.click(screen.getByText('0'));
    await userEvent.click(screen.getByText('='));

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('Error');
    });
  });

  test('handles percentage operation', async () => {
    render(<Calculator />);
  
    await userEvent.click(screen.getByText('5'));
    await userEvent.click(screen.getByText('%'));
  
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('5%');
    });
  });
  
  test('handles dot operation', async () => {
    render(<Calculator />);
  
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('.'));
    await userEvent.click(screen.getByText('2'));
  
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('3.2');
    });
  });
  
  test('handles parentheses operation', async () => {
    render(<Calculator />);
  
    await userEvent.click(screen.getByText('('));
    await userEvent.click(screen.getByText('8'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText(')'));
    await userEvent.click(screen.getByText('*'));
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('='));
  
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('30');
    });
  });
  

  test('handles unbalanced parentheses error', async () => {
    render(<Calculator />);
  
    // Simulate input with unbalanced parentheses
    await userEvent.click(screen.getByText('6'));
    await userEvent.click(screen.getByText('*'));
    await userEvent.click(screen.getByText('('));
    await userEvent.click(screen.getByText(')'));
    
    userEvent.click(screen.getByText('='));
  
    // Check if the input displays the error message
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('Error');
    });
  });


  
})