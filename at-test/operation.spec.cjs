/* eslint-disable no-undef */

const { test, expect } = require('@playwright/test');

test('adding plus operation with 2 numbers', async ({ page }) => {
  
  await page.goto('http://localhost:5173/');
  await page.getByLabel('5').click();
  await page.getByLabel('+').click();
  await page.getByLabel('4').click();
  await page.getByLabel('=').click();
  await expect (page.getByRole('textbox')).toHaveValue('9')

});

test('adding plus numbers with different result', async ({ page }) => {
  
  await page.goto('http://localhost:5173/');
  await page.getByLabel('5').click();
  await page.getByLabel('+').click();
  await page.getByLabel('4').click();
  await page.getByLabel('=').click();
  await expect (page.getByRole('textbox')).not.toHaveValue('6')

});

test('adding minus operation with 2 numbers', async ({ page }) => {
  
  await page.goto('http://localhost:5173/');
  await page.getByLabel('6').click();
  await page.getByLabel('-').click();
  await page.getByLabel('2').click();
  await page.getByLabel('=').click();
  await expect (page.getByRole('textbox')).toHaveValue('4')

});

test('adding minus operation with different result', async ({ page }) => {
  
  await page.goto('http://localhost:5173/');
  await page.getByLabel('6').click();
  await page.getByLabel('-').click();
  await page.getByLabel('2').click();
  await page.getByLabel('=').click();
  await expect (page.getByRole('textbox')).not.toHaveValue('1')

});

test('adding multiply operation with 2 numbers', async ({ page }) => {
  
  await page.goto('http://localhost:5173/');
  await page.getByLabel('6').click();
  await page.getByLabel('*').click();
  await page.getByLabel('2').click();
  await page.getByLabel('=').click();
  await expect (page.getByRole('textbox')).toHaveValue('12')

});

test('adding multiply operation with different result', async ({ page }) => {
  
  await page.goto('http://localhost:5173/');
  await page.getByLabel('6').click();
  await page.getByLabel('*').click();
  await page.getByLabel('2').click();
  await page.getByLabel('=').click();
  await expect (page.getByRole('textbox')).not.toHaveValue('11')

});

test('adding divide operation with 2 numbers', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('1').click();
  await page.getByLabel('0').click();
  await page.getByLabel('/').click();
  await page.getByLabel('2').click();
  await page.getByLabel('=').click();
  await expect(page.getByRole('textbox')).toHaveValue('5');
});


test('adding divide operation with different result', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('1').click();
  await page.getByLabel('0').click();
  await page.getByLabel('/').click();
  await page.getByLabel('2').click();
  await page.getByLabel('=').click();
  await expect(page.getByRole('textbox')).not.toHaveValue('9');
});


test('multy operation', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('4').click();
  await page.getByLabel('*').click();
  await page.getByLabel('4').click();
  await page.getByLabel('=').click();
  await page.getByLabel('/').click();
  await page.getByLabel('4').click();
  await page.getByLabel('=').click();
  await page.getByLabel('+').click();
  await page.getByLabel('4').click();
  await page.getByLabel('=').click();
  await page.getByLabel('-').click();
  await page.getByLabel('4').click();
  await page.getByLabel('=').click();

  await expect (page.getByRole('textbox')).toHaveValue('4')
});


test('clear data', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('3').click();
  await page.getByLabel('*').click();
  await page.getByLabel('6').click();
  await page.getByLabel('=').click();
  await page.getByLabel('-').click();
  await page.getByLabel('5').click();
  await page.getByLabel('=').click();
  await page.getByLabel('+').click();
  await page.getByLabel('2').click();
  await page.getByLabel('=').click();
  await page.getByLabel('C').click();

  await expect (page.getByRole('textbox')).toHaveValue('')
});


test('clear data with wrong result', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('3').click();
  await page.getByLabel('*').click();
  await page.getByLabel('6').click();
  await page.getByLabel('=').click();
  await page.getByLabel('-').click();
  await page.getByLabel('5').click();
  await page.getByLabel('=').click();
  await page.getByLabel('+').click();
  await page.getByLabel('2').click();
  await page.getByLabel('=').click();
  await page.getByLabel('C').click();

  await expect (page.getByRole('textbox')).not.toHaveValue('1')
});

test('handles parentheses ,% and dot operation', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('1').click();
  await page.getByLabel('0').click();
  await page.getByLabel('.').click();
  await page.getByLabel('5').click();
  await page.getByLabel('*').click();
  await page.getByLabel('(').click();
  await page.getByLabel('2').click();
  await page.getByLabel('+').click();
  await page.getByLabel('5').click();
  await page.getByLabel(')').click();
  await page.getByLabel('*').click();
  await page.getByLabel('3').click();
  await page.getByLabel('%').click();
  await page.getByLabel('=').click();
  await expect (page.getByRole('textbox')).toHaveValue('2.205')
});

test('test error case', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('3').click();
  await page.getByLabel('*').click();
  await page.getByLabel('(').click();
  await page.getByLabel(')').click();
  await page.getByLabel('=').click();
  await expect (page.getByRole('textbox')).toHaveValue('Error')
});

test('handles division by zero error', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('5').click();
  await page.getByLabel('/').click();
  await page.getByLabel('0').click();
  await page.getByLabel('=').click();
  await expect(page.getByRole('textbox')).toHaveValue('Infinity');
});

test('handles very large numbers', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('9').click();
  await page.getByLabel('0').click();
  await page.getByLabel('*').click();
  await page.getByLabel('9').click();
  await page.getByLabel('0').click();
  await page.getByLabel('=').click();
  await expect(page.getByRole('textbox')).toHaveValue('8100');
});

test('handles very small numbers', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('0').click();
  await page.getByLabel('.').click();
  await page.getByLabel('0').click();
  await page.getByLabel('1').click();
  await page.getByLabel('=').click();
  await expect(page.getByRole('textbox')).toHaveValue('0.01');
});