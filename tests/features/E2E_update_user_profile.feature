Feature:Update User Profile

@Update
Scenario: User Should able to update their details

Given navigate to "https://demo.nopcommerce.com/"
And click on register button
And click on gender radio  button
And enter firstname "<firstname>"
And enter lastname "<lastname>"
And enter email "<email>"
And enter password "<password>"
And enter confirm password "<confirm_password>"
And click on final register button

When click on my account
And change the lastname "<nlastname>"
And click on save button
And click on address section
And click on edit
And change phone number "<nphones>"
And click on final save button

Then user details should be changed

Examples:
    | firstname | lastname | email                | password | confirm_password | nlastname | nphone     |
    | Prabu     | ram      | rprabu150@gmail.com  | Prabu@30 | Prabu@30         | M         | 9442834571 |
    | Prabu     | ram      | rprabu150            | Prabu@30 | Prabu@30         | M         | 9442834571 |


