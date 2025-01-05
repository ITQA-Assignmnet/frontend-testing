Feature: Check your cart page

Scenario: Add an item to the cart and check your cart page
  Given I log in as a standard user for check your cart page
  When I add product to the cart
  And I click the cart icon to check your cart page
  Then I should see the title as your Cart
  When I click checkout button
  Then I should redirect to the checkout page