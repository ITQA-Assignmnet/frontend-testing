Feature: Logout functionality


Scenario: Logout successfully
  Given I visit the sidebar
  When I click the menu icon
  Then The sidebar should be displayed
  When I click the logout button
  Then I should be navigated to the login page