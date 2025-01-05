Feature: Sidebar functionality

Scenario: Display side bar
  Given I visit pages
  When I click menu icon for side bar
  Then should display side bar
  When I click the close button
  Then The side bar should disappear
