/** Generated from: tests\features\PlaceOrderETE.feature */
import { test } from "../../../tests/fixtures.js";

test.describe("Place Order End-to-End", () => {

  test.describe("Register, login, search product, add to cart, and place order", () => {

    test("Example #1", { tag: ["@PlaceOrder"] }, async ({ Given, placeOrderPage, When, Then, And }) => {
      await Given("I open the nopCommerce application", null, { placeOrderPage });
      await When("I register with a new account", null, { placeOrderPage });
      await Then("I should see a registration success message", null, { placeOrderPage });
      await When("I login with the registered account", null, { placeOrderPage });
      await Then("I should be logged in successfully", null, { placeOrderPage });
      await When("I search for product \"Apple MacBook Pro\"", null, { placeOrderPage });
      await And("I click on the product \"Apple MacBook Pro\"", null, { placeOrderPage });
      await And("I add the product to cart", null, { placeOrderPage });
      await Then("I should see a success notification", null, { placeOrderPage });
      await When("I go to the shopping cart", null, { placeOrderPage });
      await And("I proceed to checkout", null, { placeOrderPage });
      await And("I fill in the billing address details", null, { placeOrderPage });
      await And("I select shipping method", null, { placeOrderPage });
      await And("I select payment method", null, { placeOrderPage });
      await And("I confirm the payment information", null, { placeOrderPage });
      await And("I confirm the order", null, { placeOrderPage });
      await Then("I should see the order confirmation message", null, { placeOrderPage });
    });

    test("Example #2", { tag: ["@PlaceOrder"] }, async ({ Given, placeOrderPage, When, Then, And }) => {
      await Given("I open the nopCommerce application", null, { placeOrderPage });
      await When("I register with a new account", null, { placeOrderPage });
      await Then("I should see a registration success message", null, { placeOrderPage });
      await When("I login with the registered account", null, { placeOrderPage });
      await Then("I should be logged in successfully", null, { placeOrderPage });
      await When("I search for product \"Lenovo IdeaCentre 600\"", null, { placeOrderPage });
      await And("I click on the product \"Lenovo IdeaCentre 600\"", null, { placeOrderPage });
      await And("I add the product to cart", null, { placeOrderPage });
      await Then("I should see a success notification", null, { placeOrderPage });
      await When("I go to the shopping cart", null, { placeOrderPage });
      await And("I proceed to checkout", null, { placeOrderPage });
      await And("I fill in the billing address details", null, { placeOrderPage });
      await And("I select shipping method", null, { placeOrderPage });
      await And("I select payment method", null, { placeOrderPage });
      await And("I confirm the payment information", null, { placeOrderPage });
      await And("I confirm the order", null, { placeOrderPage });
      await Then("I should see the order confirmation message", null, { placeOrderPage });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\PlaceOrderETE.feature"),
});

const testMetaMap = {
  "Register, login, search product, add to cart, and place order|Example #1": {"pickleLocation":"31:3","tags":["@PlaceOrder"]},
  "Register, login, search product, add to cart, and place order|Example #2": {"pickleLocation":"32:3","tags":["@PlaceOrder"]},
};