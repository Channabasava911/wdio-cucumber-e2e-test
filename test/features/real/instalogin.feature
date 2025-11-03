@insta
Feature: Instagram Login Functionality

  Scenario Outline: To login into instagram using credentials
    Given User is on Instagram login page
    When User enters <username> and <password>
    Then click on Login button
    Then user should see the homepage with message <Expected Result>

    Examples:
      | username | password | Expected Result |
      | Hello    | abc@123  | Instagram       |
     # |Hi | dfc@1224      | Sorry, your password was incorrect. Please double-check your password. |
      #| abc    | abc@123       | Sorry, your password was incorrect. Please double-check your password. |
