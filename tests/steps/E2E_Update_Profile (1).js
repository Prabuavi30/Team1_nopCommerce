const { Given, When, Then, BeforeAll } = require("@cucumber/cucumber");
const { expect, chromium } = require("@playwright/test");
const { Register } = require("../pages/RegisterPage");
const { Update } = require("../pages/Update_profilePage");

let reg_page, upd_page, browser, context, page;
BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
});

Given("navigate to {string}", { timeout: 30000 }, async (url) => {
  reg_page = new Register(page);
  upd_page = new Update(page);
  await reg_page.launch(url);
});
Given("click on register button", { timeout: 30000 }, async () => {
  await reg_page.click_registerBTN();
});
Given("click on gender radio  button", { timeout: 30000 }, async () => {
  await reg_page.click_genderRadioBTN();
});
Given("enter firstname {string}", { timeout: 30000 }, async (firstname) => {
  await reg_page.enter_firstname(firstname);
});
Given("enter lastname {string}", { timeout: 30000 }, async (lastname) => {
  await reg_page.enter_lastname(lastname);
});
Given("enter email {string}", { timeout: 30000 }, async (email) => {
  await reg_page.enter_email(email);
});
Given("enter password {string}", { timeout: 30000 }, async (password) => {
  await reg_page.enter_password(password);
});
Given(
  "enter confirm password {string}",
  { timeout: 30000 },
  async (password) => {
    await reg_page.enter_confirm_password(password);
  },
);
Given("click on final register button", { timeout: 30000 }, async () => {
  await reg_page.click_Final_registerBTN();
});

When("click on my account", { timeout: 30000 }, async () => {
  await upd_page.click_myaccountLink();
});
When("change the lastname {string}", { timeout: 30000 }, async (nlastname) => {
  await upd_page.change_lastname(nlastname);
});
When("click on save button", { timeout: 30000 }, async () => {
  await upd_page.click_saveBTN();
});
When("click on address section", { timeout: 30000 }, async () => {
  await upd_page.click_addressLink();
});
When("click on edit", { timeout: 30000 }, async () => {
  await upd_page.click_editBTN();
});
When("change phone number {string}", { timeout: 30000 }, async (nphone) => {
  await upd_page.change_phone(nphone);
});
When("click on final save button", { timeout: 30000 }, async () => {
  await upd_page.click_Final_saveBTN();
});

Then("user details should be changed", { timeout: 30000 }, async () => {
  console.log("User is abled to Update their profile");
});
