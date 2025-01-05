Feature: Checkout Form Validation
  As a standard user
  I want to validate the checkout form
  So that I can proceed to checkout only with valid information

Scenario: Submit the form with invalid data
  Given I am logged in as a standard user
  When I navigate to the checkout form
  Then I submit the form with invalid data

Scenario: Submit the form with valid data
  Given I am logged in as a standard user
  When I navigate to the checkout form
  Then I submit the form with valid data

