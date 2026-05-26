import {test} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';

import dotenv from 'dotenv'; // Import the dotenv package to load environment variables from a .env file

dotenv.config({ path: 'test_data/.env' }); // Load environment variables from .env file
let username = process.env.username; // Access the username from environment variables
const password = process.env.password; // Access the password from environment variables
const url = "https://practicetestautomation.com/practice-test-login/";

test('Login test', async ({page}) => {
console.log("Username: " + username);
console.log("Password: " + password);

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterFirstName(username);
    await loginPage.enterPassword(password);
    await loginPage.clickLogin();
    page.pause();
    console.log("Login test completed");
});