const { Given, When, Then, BeforeAll, AfterAll, Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { expect } = require("@playwright/test");
const { ConfigOrderPage } = require("../pages/configOrderPages");

// 3 min timeout since cloudflare and checkout can be slow
setDefaultTimeout(180000);

let browser;
let page;
let configOrderPage;

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: false,
    args: ["--disable-blink-features=AutomationControlled"]
  });
});

AfterAll(async function () {
  if (browser) {
    await browser.close();
  }
});

Before(async function () {
  const context = await browser.newContext();
  page = await context.newPage();
  configOrderPage = new ConfigOrderPage(page);
});

After(async function () {
  if (page) {
    await page.close();
  }
});

Given("I open the nopCommerce demo store for config order", async function () {
  await configOrderPage.goToHomePage();
});

When("I navigate to the registration page for config order", async function () {
  await configOrderPage.goToRegisterPage();
  // check we are on the register page
  await expect(page).toHaveURL(/.*register/);
});

When("I fill in the registration form with valid details for config order", async function () {
  await configOrderPage.fillRegistrationForm();
});

When("I click the register button for config order", async function () {
  await configOrderPage.clickRegister();
});

Then("I should see a successful registration message for config order", async function () {
  const message = await configOrderPage.getRegistrationSuccessMessage();
  expect(message.trim()).toBe("Your registration completed");
});

When("I logout from the store for config order", async function () {
  await configOrderPage.logout();
});

When("I click the login link for config order", async function () {
  await configOrderPage.clickLoginLink();
});

When("I login with the registered credentials for config order", async function () {
  await configOrderPage.loginWithRegisteredCredentials();
});

Then("I should be logged in successfully for config order", async function () {
  const isLoggedIn = await configOrderPage.isLoggedIn();
  // check that My Account link is showing
  expect(isLoggedIn).toBeTruthy();
});

When("I hover over the Computers menu and click Desktops for config order", async function () {
  await configOrderPage.navigateToDesktops();
});

When("I click on Build your own computer for config order", async function () {
  await configOrderPage.clickBuildYourOwnComputer();
});

Then("I should be on the Build your own computer page for config order", async function () {
  const title = await configOrderPage.getProductTitle();
  expect(title.trim()).toContain("Build your own computer");
});

When("I select processor {string} for config order", async function (processorText) {
  await configOrderPage.selectProcessor(processorText);
});

When("I select RAM {string} for config order", async function (ramText) {
  await configOrderPage.selectRAM(ramText);
});

When("I select HDD {string} for config order", async function (hddOption) {
  await configOrderPage.selectHDD(hddOption);
});

When("I select OS {string} for config order", async function (osOption) {
  await configOrderPage.selectOS(osOption);
});

When("I select software {string} for config order", async function (softwareOption) {
  await configOrderPage.selectSoftware(softwareOption);
});

When("I click the Add to cart button for config order", async function () {
  await configOrderPage.clickAddToCart();
});

Then("I should see a product added to cart confirmation for config order", async function () {
  const message = await configOrderPage.getAddToCartMessage();
  expect(message).toContain("The product has been added to your");
});

When("I go to the shopping cart for config order", async function () {
  await configOrderPage.goToShoppingCart();
  // make sure cart page loaded
  await expect(page).toHaveURL(/.*cart/);
});

When("I accept the terms of service for config order", async function () {
  await configOrderPage.acceptTermsOfService();
});

When("I click the checkout button for config order", async function () {
  await configOrderPage.clickCheckout();
});

When("I fill in the billing address details for config order", async function () {
  await configOrderPage.fillBillingAddress();
});

When("I continue from billing for config order", async function () {
  await configOrderPage.continueBilling();
});

When("I continue from shipping method for config order", async function () {
  await configOrderPage.continueShippingMethod();
});

When("I select COD as payment method for config order", async function () {
  await configOrderPage.selectCODPaymentMethod();
});

When("I continue from payment method for config order", async function () {
  await configOrderPage.continuePaymentMethod();
});

When("I continue from payment information for config order", async function () {
  await configOrderPage.continuePaymentInfo();
});

When("I confirm the order for config order", async function () {
  await configOrderPage.confirmOrder();
});

Then("I should see the order confirmation message for config order", async function () {
  const message = await configOrderPage.getOrderConfirmationMessage();
  expect(message.trim()).toContain("Your order has been successfully processed!");
});
