Feature: Product Catalog Navigation and Cart Functionality
  As a standard user
  I want to view product details and add items to cart
  
  Scenario: View product details and add to cart
    Given I log in as a standard user for check product catelog
    When I click the product image with data-test "inventory-item-sauce-labs-backpack-img"
    Then I should be navigated to the specific product catalog page
    And I should be displayed selected product price
    When I click the add to cart
    Then It should changed Add to cart button to remove button
    And Cart count should be updated to "1"
    When I click the back button
    Then I should be redirected to the inventory page
