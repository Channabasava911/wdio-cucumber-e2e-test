Feature: Demo Feature

  @demo
  Scenario Outline: Run First demo Feature
    Given Google page is opened
    When Search with <SearchItem>
    Then Click on first search result
    Then URL should match <ExpectedURL>

    Examples:
      | TestID     | SearchItem | ExpectedURL               |
      | DEMO_TC001 | WebIO      | https://webdriver.io/     |
      #| DEMO_TC002 | Cucumber   | https://cucumber.io/      |
      #| DEMO_TC003 | Selenium   | https://www.selenium.dev/ |
# C:\Users\chann\OneDrive\Documents\Desktop\webio\test\features\demo\demo.feature
# C:\Users\chann\OneDrive\Documents\Desktop\webio\test\features\stepdefinitions\demo.ts
