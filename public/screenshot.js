import { chromium } from 'playwright';

(async () => {
  // Launch the browser
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Navigate to the website
  await page.goto('https://www.clearpathcancellation.com', { waitUntil: 'networkidle' });
  
  // Take a full page screenshot
  await page.screenshot({
    path: 'clearpath-website.png',
    fullPage: true
  });

  // Close the browser
  await browser.close();
})();
