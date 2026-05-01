const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/CheckOrderPage');

const { Given, When, Then } = createBdd();

Given('go to {string}', async ({ page }, url) => {
    const loginp = new LoginPage(page);
    await loginp.launchurl(url);
});

When('goto login', async ({ page }) => {
    const loginp = new LoginPage(page);
    await loginp.userloginpg.click();
});

When('enter email {string}', async ({ page }, email) => {
    const loginp = new LoginPage(page);
    await loginp.email.fill(email);
});

When('select password {string}', async ({ page }, password) => {
    const loginp = new LoginPage(page);
    await loginp.password.fill(password);
});

When('click Login', async ({ page }) => {
    const loginp = new LoginPage(page);
    await loginp.loginBTN.click();
});

Then('user should be logged in', async ({ page }) => {
    await expect(page.locator('.ico-logout')).toBeVisible();
});

When('click My account', async ({ page }) => {
    const loginp = new LoginPage(page);
    await loginp.myaccountbtn.click();
});

When('go to orders', async ({ page }) => {
    const loginp = new LoginPage(page);
    await loginp.orderbtn.click();
});

When('fetch order details', async ({ page }) => {
    const loginp = new LoginPage(page);

    const orders = await loginp.getOrders();
    console.log('ORDER IDS:', orders);

    const details = await loginp.getOrderDetails();
    console.log('ORDER DETAILS:', details);
});