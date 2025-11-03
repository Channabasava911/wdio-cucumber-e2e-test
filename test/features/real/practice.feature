@practice
Feature: Test login functionality

  Scenario Outline: login with credentials
    Given the user is on the login page
    When the user enters <username> and <password>
    And clicks the submit button
    Then the user should see the <message>

    Examples:
      | username | password    | message                                              |
      | student  | Password123 | Congratulations student. You successfully logged in! |
      | student  | wrongPass   | Your password is invalid!                            |
      | user     | Password123 | Your username is invalid!                            |
