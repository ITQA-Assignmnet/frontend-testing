Feature: Side bar functionality

Scenario: display side bar
  Given I visit pages
  when I click menu icon for side bar
  Then should disply side bar
  When I click the close button
  Then The side bar should disappear
