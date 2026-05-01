/** Generated from: tests\features\CheckOrderDetials.feature */
import { test } from "playwright-bdd";

test.describe("Order status", () => {

  test("Login as user check for orders", { tag: ["@orders"] }, async ({ Given, page, When, And, Then }) => {
    await Given("go to \"https://demo.nopcommerce.com/\"", null, { page });
    await When("goto login", null, { page });
    await And("enter email \"dev1234@gmail.com\"", null, { page });
    await And("select password \"Dev@1234\"", null, { page });
    await And("click Login", null, { page });
    await Then("user should be logged in", null, { page });
    await When("click My account", null, { page });
    await And("go to orders", null, { page });
    await And("fetch order details", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\CheckOrderDetials.feature"),
});

const testMetaMap = {
  "Login as user check for orders": {"pickleLocation":"4:1","tags":["@orders"],"ownTags":["@orders"]},
};