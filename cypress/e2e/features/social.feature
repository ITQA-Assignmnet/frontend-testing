
Feature: Social Media Icons
  

  Scenario: Verify social media icons are visible
    Given I am on the homepage
    Then I should see the Twitter icon
    And I should see the Facebook icon
    And I should see the LinkedIn icon

  Scenario: Verify social media links open in new tab
    Given I am on the homepage
    Then the Twitter link should open in a new tab
    And the Facebook link should open in a new tab
    And the LinkedIn link should open in a new tab

  Scenario: Verify social media URLs are correct
    Given I am on the homepage
    Then the Twitter link should have the correct URL
    And the Facebook link should have the correct URL
    And the LinkedIn link should have the correct URL