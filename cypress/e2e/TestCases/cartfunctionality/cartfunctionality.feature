Feature: Cart functionality

Scenario: Adding items to the cart updates the cart number
  Given I log in as a standard user for check cart functionality
  When I add an item to the cart
  Then the cart number should increase by 1 in inventory page
  When I add another item to the cart
  Then the cart number should increase by 1 again in inventory page
