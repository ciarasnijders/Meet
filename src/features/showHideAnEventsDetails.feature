Feature: Show/hide an event's details

Scenario: An event element is collapsed by default
Given a user was on the main page
When nothing is clicked/selected
Then the event details will be collapsed by default

Scenario: User can expand an event to see its details
Given a user was on the events page and wanted to see its details
When the expand option is selected
Then the user will see the details of the event

Scenario: User can collapse an event to hide its details
Given a user was viewing the events details
When the user clicks on button the close the expanded event
Then the event will collapse to hide its details