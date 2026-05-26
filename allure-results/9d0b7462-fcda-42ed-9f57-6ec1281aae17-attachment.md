# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POMRunner/login.spec.js >> Login test
- Location: tests/POMRunner/login.spec.js:8:5

# Error details

```
TypeError: _loginPage.LoginPage is not a constructor
```

# Test source

```ts
  1  | import {test} from '@playwright/test';
  2  | import {LoginPage} from '../../pages/loginPage';
  3  | 
  4  | const password = 'Password123';
  5  | const username = 'student';
  6  | const url = "https://practicetestautomation.com/practice-test-login/";
  7  | 
  8  | test('Login test', async ({page}) => {
> 9  |     const loginPage = new LoginPage(page);
     |                       ^ TypeError: _loginPage.LoginPage is not a constructor
  10 |     await loginPage.goto(url);
  11 |     await loginPage.enterUsername(username);
  12 |     await loginPage.enterPassword(password);
  13 |     await loginPage.clickLogin();
  14 | });
```