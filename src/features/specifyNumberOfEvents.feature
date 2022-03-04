Feature: Specify number of events

Scenario: When user has not specified a number, 32 is the default number
Given the user has not decided how many events to see
When the user opens the main page
Then by default the user will see 32 events

Scenario: User can change the number of events they want to see
Given the user wanted to see a specific number of events
When the user chooses the number of events to be shown
Then the user can change the number of events they want to see