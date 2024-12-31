Feature: Login functionality

Scenario: User logs in successfully
  Given I visit the login page
  When I enter "<username>" and "<password>"
  Then I should see the inventory page

Examples:
  | username       | password     |
  | standard_user  | secret_sauce |


