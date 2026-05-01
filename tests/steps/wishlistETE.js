const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect } = require('@playwright/test');
const { WishlistPage } = require('../pages/wishlistETEpage');

let flow;

Given('navigate to {string}', async ({ page }, url) => {
  flow = new WishlistPage(page);
  await flow.navigate(url);
});

let generatedEmail = "";

When('user registers with {string}, {string}, {string}, and {string}', async ({ page }, firstName, lastName, emailTemplate, password) => {
  generatedEmail = emailTemplate.replace('<random>', Math.floor(Math.random() * 1000000).toString());
  await flow.register(firstName, lastName, generatedEmail, password);
});

When('goto login', async ({ page }) => {
  await flow.loginLink.click();
});

When('enter email {string}', async ({ page }, emailTemplate) => {
  const emailToUse = emailTemplate.includes('<random>') ? generatedEmail : emailTemplate;
  await flow.emailTF.fill(emailToUse);
});

When('select password {string}', async ({ page }, password) => {
  await flow.passwordTF.fill(password);
});

When('click Login', async ({ page }) => {
  await flow.loginBtn.click();
});

When('click on {string}', async ({ page }, menu) => {
  if (menu === "Computers") {
    await flow.clickComputers();
  }
});

When('user clicks on {string} category', async ({ page }, category) => {
  if (category === "Desktops") {
    await flow.clickDesktops();
  }
});

When('select any product', async ({ page }) => {
  await flow.selectProduct();
});

When('click on "Add to wishlist" button', async ({ page }) => {
  await flow.addProductToWishlist();
});

Then('product should be added to wishlist successfully', async ({ page }) => {
  const notification = page.locator('.bar-notification.success');
  await expect(notification).toBeVisible();
  await expect(notification).toContainText('wishlist', { ignoreCase: true });
});

When('user navigates to wishlist page', async ({ page }) => {
  await flow.openWishlist();
});

When('select the product from wishlist', async ({ page }) => {

});

When('click on "Add to cart" button', async ({ page }) => {
  await flow.addWishlistItemToCart();
});

Then('product should be added to cart successfully', async ({ page }) => {
  await expect(page).toHaveURL(/.*cart/);
  const pageTitle = page.locator('.page-title h1');
  await expect(pageTitle).toHaveText('Shopping cart');
});
