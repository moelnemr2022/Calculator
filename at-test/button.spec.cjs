/* eslint-disable no-undef */
const { test, expect } = require('@playwright/test');

test('Header', async ({ page }) => {
  
  await page.goto('/');
  await page.getByRole('heading', { name: 'Calculator' }).click();
  await expect(page.getByRole('heading', { name: 'Calculator' })).toBeVisible();

});


test('addItem one number', async ({ page }) => {
  
  await page.goto('/');
  await page.getByLabel('3').click();
  await expect(page.getByRole('textbox')).toHaveValue('3');
});

test('addItem 10 numbers', async ({ page }) => {
  
  await page.goto('/');
  await page.getByLabel('1').click();
  await page.getByLabel('2').click();
  await page.getByLabel('3').click();
  await page.getByLabel('4').click();
  await page.getByLabel('5').click();
  await page.getByLabel('6').click();
  await page.getByLabel('7').click();
  await page.getByLabel('8').click();
  await page.getByLabel('9').click();
  await page.getByLabel('0').click();
  await expect(page.getByRole('textbox')).toHaveValue('1234567890');
  
});



test('add divide', async ({ page }) => {
  
  await page.goto('/');
  await page.getByLabel('/').click();
  await expect(page.getByRole('textbox')).toHaveValue('/');
});

test('add multiply', async ({ page }) => {
  
  await page.goto('/');
  await page.getByLabel('*').click();
  await expect(page.getByRole('textbox')).toHaveValue('*');
});

test('add equal', async ({ page }) => {
  
  await page.goto('/');
  await page.getByLabel('=').click();
  await expect(page.getByRole('textbox')).toHaveValue('Error');
});



test('add minus', async ({ page }) => {
  
  await page.goto('/');
  await page.getByLabel('-').click();
  await expect(page.getByRole('textbox')).toHaveValue('-');
});

test('add plus', async ({ page }) => {
  
  await page.goto('/');
  await page.getByLabel('+').click();
  await expect(page.getByRole('textbox')).toHaveValue('+');
});

test('clear data', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('C').click();
  await expect (page.getByRole('textbox')).toHaveValue('')
});




 