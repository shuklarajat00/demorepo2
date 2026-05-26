import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'; // Import the dotenv package to load environment variables from a .env file

dotenv.config({ path: 'test_data/.env' }); // Load environment variables from .env file
const username = process.env.username as string; // Access the username from environment variables
const password = process.env.password as string; // Access the password from environment variables
const url = process.env.url as string; // Access the URL from environment variables
const To_check_dotenv = process.env.To_check_dotenv as string; // Access the To_check_dotenv variable from environment variables

test('GetByMethods_test', async ({ page }) => {

//test('E2E flow to add product123', async ({page})=>{

    await console.log("Reading or not-> ", To_check_dotenv); // Log the username to verify it's loaded correctly
    await page.goto(url);
    await page.getByPlaceholder("Username").fill(username);
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button", {name:"Login"}).click();


}



);