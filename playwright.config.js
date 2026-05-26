// @ts-check
import { defineConfig, devices } from '@playwright/test';


const config=({

  Screenshot: 'only-on-failure', // take screenshot only on test failure
  testDir: './tests', // directory where the test files are located
  timeout: 30 * 1000, // time out for each test
  retries: 0, // number of retries for failed tests
 //reporter: 'html', // reporter to use for test results


 reporter: [
    ['line'],
    [
      'allure-playwright',
      {
        resultsDir: 'allure-results',
        // यह सुनिश्चित करता है कि स्क्रीनशॉट और वीडियो Allure में अटैच हों
        detail: true,
        suiteTitle: false,
      },
    ],
  ],
  expect: {
    timeout: 5000 // time out for expect assertions
  },
  use: {
    browserName: 'chromium', // browser to use for testing
    headless: true, // run tests in headless mode
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

  },

  


});
module.exports=config;

