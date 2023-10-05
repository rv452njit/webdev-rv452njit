const { test, expect } = require('@playwright/test');

test('check that "express works" text is present', async ({ page }) => {
  await page.goto('/');
  
  // Using the expect method with a page locator
  // This will check if the text "express works" is present anywhere on the page
  // Using a locator to get the text content of the h1 element
  const heading = page.locator('h1');
  await expect(heading).toHaveText('express works');

});

