Feature: Add to Cart
  Scenario: Add an item to the cart
    Given I log in as a standard user for check add to cart
    When I click the add to cart on product list page
    Then It should changed Add to cart button to remove button on product list page
    And Cart count should be updated to "1" on product list page
    When I click the add to cart on products page
