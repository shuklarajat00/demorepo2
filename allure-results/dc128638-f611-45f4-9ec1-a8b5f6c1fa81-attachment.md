# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POMRunner/login.spec.js >> Login test
- Location: tests/POMRunner/login.spec.js:7:5

# Error details

```
TypeError: _LoginPage.HomePage is not a constructor
```

# Test source

```ts
  1  | import {test} from '@playwright/test';
  2  | import {HomePage} from '../../pages/LoginPage';
  3  | 
  4  | const password = 'Password123';
  5  | const username = 'student';
  6  | 
  7  | test('Login test', async ({page}) => {
> 8  |     const homePage = new HomePage(page);
     |                      ^ TypeError: _LoginPage.HomePage is not a constructor
  9  |     await homePage.goto();
  10 |     await homePage.enterFirstName(username);
  11 |     await homePage.enterPassword(password);
  12 |     await homePage.clickLogin();
  13 | });
```