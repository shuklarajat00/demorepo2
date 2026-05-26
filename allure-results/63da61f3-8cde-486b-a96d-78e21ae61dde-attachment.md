# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: POMRunner/login.spec.js >> Login test
- Location: tests/POMRunner/login.spec.js:7:5

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
  6  | 
  7  | test('Login test', async ({page}) => {
> 8  |     const loginPage = new LoginPage(page);
     |                       ^ TypeError: _loginPage.LoginPage is not a constructor
  9  |     await loginPage.goto();
  10 |     await loginPage.enterFirstName(username);
  11 |     await loginPage.enterPassword(password);
  12 |     await loginPage.clickLogin();
  13 | });
```