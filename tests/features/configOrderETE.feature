Feature: Config Order End to End

  @ConfigOrder
  Scenario: Register, login, build a custom computer and place order via COD for config order
    Given I open the nopCommerce demo store for config order
    When I navigate to the registration page for config order
    And I fill in the registration form with valid details for config order
    And I click the register button for config order
    Then I should see a successful registration message for config order

    When I logout from the store for config order
    And I click the login link for config order
    And I login with the registered credentials for config order
    Then I should be logged in successfully for config order

    When I hover over the Computers menu and click Desktops for config order
    And I click on Build your own computer for config order
    Then I should be on the Build your own computer page for config order

    When I select processor "2.2 GHz Intel Pentium Dual-Core E2200" for config order
    And I select RAM "2 GB" for config order
    And I select HDD "320 GB" for config order
    And I select OS "Vista Home Basic" for config order
    And I select software "Microsoft Office [+$50.00]" for config order
    And I click the Add to cart button for config order
    Then I should see a product added to cart confirmation for config order

    When I go to the shopping cart for config order
    And I accept the terms of service for config order
    And I click the checkout button for config order
    And I fill in the billing address details for config order
    And I continue from billing for config order
    And I continue from shipping method for config order
    And I select COD as payment method for config order
    And I continue from payment method for config order
    And I continue from payment information for config order
    And I confirm the order for config order
    Then I should see the order confirmation message for config order
