// const { createBdd } = require("playwright-bdd");
// const { test } = require("../fixtures");
const { expect, chromium } = require("@playwright/test");
const { Register } = require("../pages/RegisterPage");
const { Update } = require("../pages/Update_profilePage");
const { Given, When, Then, BeforeAll } = require("@cucumber/cucumber");

let reg_page, upd_page;
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
Given("click on register button", async () => {
  await reg_page.click_registerBTN();
});
Given("click on gender radio  button", async () => {
  await reg_page.click_genderRadioBTN();
});
Given("enter firstname {string}", async (firstname) => {
  await reg_page.enter_firstname(firstname);
});
Given("enter lastname {string}", async (lastname) => {
  await reg_page.enter_lastname(lastname);
});
Given("enter email {string}", async (email) => {
  await reg_page.enter_email(email);
});
Given("enter password {string}", async (password) => {
  await reg_page.enter_password(password);
});
Given("enter confirm password {string}", async (password) => {
  await reg_page.enter_confirm_password(password);
});
Given("click on final register button", async () => {
  await reg_page.click_Final_registerBTN();
});

When("click on my account", async () => {
  await upd_page.click_myaccountLink();
});
When("change the lastname {string}", async (nlastname) => {
  await upd_page.change_lastname(nlastname);
});
When("click on save button", async () => {
  await upd_page.click_saveBTN();
});
When("click on address section", async () => {
  await upd_page.click_addressLink();
});
When("click on edit", async () => {
  await upd_page.click_editBTN();
});
When("change phone number {string}", async (nphone) => {
  await upd_page.change_phone(nphone);
});
When("click on final save button", async () => {
  await upd_page.click_Final_saveBTN();
});

Then("user details should be changed", async () => {
  console.log("User is abled to Update their profile");
});
