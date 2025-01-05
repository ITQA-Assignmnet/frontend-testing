Feature: Login functionality

Scenario Outline: User logs in successfully
  Given I visit the login page
  When I enter "<username>" and "<password>"
  Then I should see the inventory page

Examples:
  | username       | password     |
  | standard_user  | secret_sauce |

Scenario Outline: Login with invalid credentials
  Given I visit the login page
  When I enter "<username>" and "<password>"
  Then I should see an error message

Examples:
  | username | password     |
  | hiru     | secret_hiru  |

Scenario Outline: Locked out user login
  Given I visit the login page
  When I enter "<username>" and "<password>"
  Then I should see an error message for locked user

Examples:
  | username       | password     |
  | locked_out_user | secret_sauce |

