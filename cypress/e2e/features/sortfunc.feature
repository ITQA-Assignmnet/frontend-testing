Feature: Sort functionality

Scenario: Sort items
  Given I visit inventory page as registered user
  when I click the sort icon 
  Then The sort list should be displayed
  When I enter 'Name A to Z'
  Then The items name should list according to A to Z
  when I enter 'Name Z to A'
  Then The items name should list according to Z to A 
  when I enter 'price low to high'
  Then The items price should list according to low to high
  when I enter 'price high to low'
  Then The items price should list according to high to low