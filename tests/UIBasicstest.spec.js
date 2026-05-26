//import { test, expect } from '@playwright/test';

import { test, expect } from '@playwright/test';



test('UI Basic test class', async function ({ page }) {
        console.log("This is a basic clrtest class");
        await page.goto('https://github.com/');
        console.log(await page.title());
        await expect(page).toHaveTitle('GitHub · Change is constant. GitHub keeps you ahead. · GitHub   ');

    });

test.only('UI Basic test class test2', async function ({ page }) {

    const UserName=page.locator('#username');
    const Password=page.locator('#password');
    const SignInBtn=page.locator('#signInBtn');
    const ErrorMsg=page.locator('[style*="block"]');
    const CardTitles=page.locator('.card-body a');

        console.log("This is a basic clrtest class");
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        console.log(await page.title());
        await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');

       await UserName.fill('rahulshettyacadeeeeeeeeee');// Fill in the username and password fields
        await Password.fill('learning'); // Fill in the username and password fields
        await SignInBtn.click(); // Click the sign-in button
        console.log(await ErrorMsg.textContent());// Print the error message to the console
        await expect(ErrorMsg).toContainText('Incorrect'); // Assert that the error message contains the text 'Incorrect'


        await UserName.fill('rahulshettyacademy');// Fill in the username and password fields
        await Password.fill('Learning@830$3mK2'); // Fill in the username and password fields
        await SignInBtn.click(); // Click the sign-in button
        //console.log(await CardTitles.nth(0).textContent());
        await CardTitles.first().waitFor(); //Not a good practice to use wait for, instead we can use expect with to be visible
        
        await page.waitForLoadState('networkidle'); // flaky test, not a good practice to use wait for, instead we can use expect with to be visible
        const allProductList=await  CardTitles.allTextContents();
        console.log(allProductList);
});