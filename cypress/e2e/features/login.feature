Feature: Login functionality

Scenario: User logs in successfully
  Given I visit the login page
  When I enter valid credentials
  Then I should see the inventory page
