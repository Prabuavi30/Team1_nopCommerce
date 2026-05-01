Feature: Wishlist to Cart

@wishlist
Scenario: Add product to wishlist and move to cart

  Given navigate to "https://demo.nopcommerce.com/"
   When user registers with "John", "Doe", "testuser<random>@gmail.com", and "Dev@1234"
   And goto login
   And enter email "testuser<random>@gmail.com"
   And select password "Dev@1234"
   And click Login
   And click on "Computers"
   When user clicks on "Desktops" category
   And select any product
   And click on "Add to wishlist" button
   Then product should be added to wishlist successfully

   When user navigates to wishlist page
   And select the product from wishlist
   And click on "Add to cart" button
   Then product should be added to cart successfully