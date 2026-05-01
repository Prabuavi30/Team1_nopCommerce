const {
  Given,
  When,
  Then,
  BeforeAll,
  AfterAll,
  Before,
  After,
  setDefaultTimeout,
} = require("@cucumber/cucumber");

const { chromium } = require("@playwright/test");
const { PlaceOrderETEPage } = require("../pages/PlaceOrderETEpage");

let browser, context, page, placeOrderPage;

setDefaultTimeout(120000);

// Launch browser once
BeforeAll(async () => {
  browser = await chromium.launch({
    headless: false,
    channel: "chrome",
    args: ["--disable-blink-features=AutomationControlled"],
  });
});

// Create fresh context for each scenario
Before(async () => {
  context = await browser.newContext({
    baseURL: "https://demo.nopcommerce.com",
  });

  page = await context.newPage();
  placeOrderPage = new PlaceOrderETEPage(page);
});

// Cleanup
After(async () => {
  await context.close();
});

AfterAll(async () => {
  await browser.close();
});

// ------------------ STEPS ------------------ //

// Navigation
Given("I open the nopCommerce application", async function () {
  await placeOrderPage.navigateTo();
});

// Registration
When("I register with a new account", async function () {
  await placeOrderPage.register();
});

Then("I should see a registration success message", async function () {
  await placeOrderPage.verifyRegistration();
});

// Login
When("I login with the registered account", async function () {
  await placeOrderPage.login();
});

Then("I should be logged in successfully", async function () {
  await placeOrderPage.verifyLogin();
});

// Product Search
When("I search for product {string}", async function (productName) {
  await placeOrderPage.searchProduct(productName);
});

When("I click on the product {string}", async function (productName) {
  await placeOrderPage.clickProduct(productName);
});

// Add to Cart
When("I add the product to cart", async function () {
  await placeOrderPage.addToCart();
});

// Then("I should see a success notification", async function () {
//   await placeOrderPage.verifySuccessNotification();
// });

// Checkout
When("I go to the shopping cart", async function () {
  await placeOrderPage.goToCart();
});

When("I proceed to checkout", async function () {
  await placeOrderPage.proceedToCheckout();
});

When("I fill in the billing address details", async function () {
  await placeOrderPage.fillBillingAddress();
});

When("I select shipping method", async function () {
  await placeOrderPage.selectShippingMethod();
});

When("I select payment method", async function () {
  await placeOrderPage.selectPaymentMethod();
});

When("I confirm the payment information", async function () {
  await placeOrderPage.confirmPaymentInfo();
});

When("I confirm the order", async function () {
  await placeOrderPage.confirmOrder();
});

// Verification
Then("I should see the order confirmation message", async function () {
  await placeOrderPage.verifyOrderConfirmation();
});
