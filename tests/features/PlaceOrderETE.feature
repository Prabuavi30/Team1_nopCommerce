Feature: Place Order End-to-End

@PlaceOrder
Scenario Outline: Register, login, search product, add to cart, and place order

Given I open the nopCommerce application

When I register with a new account
Then I should see a registration success message

When I login with the registered account
Then I should be logged in successfully

When I search for product "<product>"
And I click on the product "<product>"
And I add the product to cart

When I go to the shopping cart
And I proceed to checkout
And I fill in the billing address details
And I select shipping method
And I select payment method
And I confirm the payment information
And I confirm the order

Then I should see the order confirmation message

Examples:
  | product              |
  | Apple MacBook Pro    |
  | Lenovo IdeaCentre 600 |