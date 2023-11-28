 import { describe, test, expect } from 'vitest';

import { render,screen } from '@testing-library/react';
 //import userEvent from '@testing-library/user-event';
 import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  test('renders a header on the page', () => {
   
    render(<App />)
    const headerText = screen.getByRole('heading', {name: /Calculator/i }) 
    expect(headerText).toBeInTheDocument()
  })

  test('renders the header of the List component', () => {
    render(<App />)
    const listHeading = screen.getByText('Calculator')
    expect(listHeading).toBeInTheDocument()
  })
})