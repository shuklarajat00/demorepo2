import { test, expect } from '@playwright/test';
import XLSX from 'xlsx'; // Import the xlsx package to read Excel files
import path from 'path'; // Import the path module to handle file paths

const userDataFilePath = path.resolve(__dirname, '../test_data/Book1.xlsx'); // Define the path to the Excel file

// Read user data from the Excel file
const workbook = XLSX.readFile(userDataFilePath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const userData = XLSX.utils.sheet_to_json(worksheet);




test('GetByMethods_test', async ({ page }) => {
    console.log("User data from Excel:", userData); // Log the user data to verify it's read correctly

   // await console.log("Reading or not-> ", To_check_dotenv); // Log the username to verify it's loaded correctly

   for(let i=0; i<userData.length; i++){
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder("Username").fill(userData[i].username);
    await page.getByPlaceholder("Password").fill(userData[i].password);
    await page.getByRole("button", { name: "Login" }).click();
   }


}



);