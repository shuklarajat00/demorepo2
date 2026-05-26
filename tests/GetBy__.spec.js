const {test, expect}= require('@playwright/test');
import dotenv from 'dotenv';
dotenv.config({path: 'test_data/.env'});
const username =process.env.username;
const password= process.env.password;
const url= process.env.url;


test('GetByMethods_test', async ({page})=>{

//test('E2E flow to add product123', async ({page})=>{
    await page.goto(url);
    await page.getByPlaceholder("Username").fill(username);
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button", {name:"Login"}).click();


}



);