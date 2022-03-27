@Loginfeature @regression
Feature: Techfios login fuctionality validation
Background:
Given User is login on techfiospage
#@Scenario @smoke
#Scenario: Login with valid credentials
#
#Given User is login on techfiospage
#When User enters username value as "demo@techfios.com"
#When User enters password value as "abc123"
#And User clicks on signin button
#Then User should landin on dashboard page
@OtherScanario  
Scenario Outline: Login with invalid username


When User enters username value as"<username>"
When User enters password value as "<password>"
And User clicks on signin button
Then User should notland on dashboardpage
Examples:
|username|password|
|demo@techfios.com|abc124|
|demo1@techfios.com|abc123|
|demo1@techfios.com|abc124|
|demo@techfios.com|abc123|
 