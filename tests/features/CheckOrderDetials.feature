Feature: Order status

@orders
Scenario: Login as user check for orders
  Given go to "https://demo.nopcommerce.com/"
  When goto login
  And enter email "dev1234@gmail.com"
  And select password "Dev@1234"
  And click Login
  Then user should be logged in
  When click My account
  And go to orders
  And fetch order details
    # And enter mobile "5874965885"
    # And enter date of birth "01 Jan 2004"
    # And enter subject "Maths"
    # And select hobby "Sports"
    # And upload picture "C:/Users/Asus/Pictures/WhatsApp Image 2026-04-22 at 4.50.49 PM (1).jpeg"
    # And enter current address "123 Main Street, New York"
    # And select state "NCR"
    # And select city "Delhi"
    # When click submit
    # Then should see confirmation "Thanks for submitting the form"