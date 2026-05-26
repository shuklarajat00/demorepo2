const {test, expect} = require('@playwright/test');

test('E2E flow to add product', async ({page})=>{

console.log("This is a demo test class");
const url="https://rahulshettyacademy.com/client/#/auth/login";
const UserName="rajatshukla43222000@gmail.com";
const Password="Rajat@123";
const AddProductName="ZARA COAT 3";

//Login to the application
await page.goto(url);
await page.locator("#userEmail").fill(UserName);
await page.locator("#userPassword").fill(Password);
await page.locator("#login").click();

//Add product to cart
await page.locator(".card-body").first().waitFor();
const productNames = await page.locator(".card-body").allTextContents();
const productCount = await page.locator(".card-body").count();

for(let i=0; i<productCount; i++){
    if(productNames[i].includes(AddProductName)){
        await page.locator(".card-body").nth(i).locator("text= Add To Cart").click();
        break;
    }
}

//Go to cart and verify the product is added
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();

//Go to checkout and place the order
await page.getByText("Checkout").click();

//selecting the country from dropdown by sending keys one by one with delay of 100ms
await page.locator("[placeholder='Select Country']").pressSequentially("Ind", {delay: 100});//selecting the country from dropdown by sending keys one by one with delay of 100ms
const ListCountry = await page.locator(".ta-results button");
await ListCountry.first().waitFor();
 const ListCount=await ListCountry.count();

//selecting the country from dropdown by iterating through the list and clicking on the desired country
for(let i=0; i<ListCount; i++){
    const text=await ListCountry.nth(i).textContent();
    if(text===" India"){
        await ListCountry.nth(i).click();
        break;
    }
    }

    //place the order
    await page.locator(".action__submit").click();

    //Verify the order is placed successfully
    await page.locator(".hero-primary").waitFor();
    const orderConfirmation = await page.locator(".hero-primary").textContent();
    expect(orderConfirmation).toBe(" Thankyou for the order. ");
    

    //Extract the order ID from the confirmation message
    const wholeOrderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(wholeOrderID);
    const orderID = wholeOrderID.split("|")[1].trim();
    console.log(orderID);

    //Go to My Orders page and verify the order is present in the list
    await page.locator("[routerlink*='myorders']").first().click();
    await page.locator(".ng-star-inserted").first().waitFor();


    //table of all orders and count of orders
    const OrderProdutsId = await page.locator("tbody tr");
    const OrderProdutsIdCount = await page.locator(".ng-star-inserted").count();

    //console.log("meri all order ki list"+OrderProdutsId);
    
    //Iterating through the list of orders and clicking on the order with the desired order ID
    for(let i=0; i<OrderProdutsIdCount; i++){
        const text1 = await OrderProdutsId.nth(i).locator("th").textContent();
        console.log("order id ki list"+text1);

        if(text1.includes(orderID)){
            await OrderProdutsId.nth(i).locator("button").first().click();
            break;
            
        }

        
    }
    //Extract the order ID from the order details page and verify it matches the order ID from the confirmation message
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderID.includes(orderIdDetails)).toBeTruthy();





await page.pause();


});