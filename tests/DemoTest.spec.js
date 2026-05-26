const {test, expect} = require('@playwright/test');

test('demo test workflow automation', async ({page})=>{

console.log("This is a demo test class");

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

await page.locator(".text-reset").click();
await page.locator("#firstName").fill("Rajat");
await page.locator("#lastName").fill("Shukla");
await page.locator("#userEmail").fill("rajatshukla43222000@gmail.com");
await page.locator("#userMobile").fill("9876543209");
//await page.selectOption("[formcontrolname='occupation']",'1');// This will select the second option (index starts at 0)
await page.selectOption("[formcontrolname='occupation']", { index: 1 });
await page.locator("[value='Male']").click();
//await page.pause();
await page.locator("#userPassword").fill("Rajat@123");
await page.locator("#confirmPassword").fill("Rajat@123");
await page.locator("[type='checkbox']").click();
//await page.pause();
await page.locator("#login").click();


await page.locator(".btn-primary").click();

await page.locator("#userEmail").fill("rajatshukla43222000@gmail.com");
await page.locator("#userPassword").fill("Rajat@123");
await page.locator("#login").click();

console.log(await page.locator(".card-body b").nth(1).textContent());
await page.pause();




});