import { Page } from "@playwright/test";

export class LoginPage {
constructor(public page:Page) {
};

async goto(){
    await this.page.goto("https://practicetestautomation.com/practice-test-login/");
}


async enterFirstName(name: string){
    await this.page.locator("#username").fill(name);
    }

async enterPassword(password: string){
    await this.page.locator("#password").fill(password);
}

async clickLogin(){
    await this.page.locator("#submit").click();


}
}