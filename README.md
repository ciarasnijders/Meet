# Meet
FEATURE 1: FILTER EVENTS BY CITY

Scenario 1: BY DEFAULT, WHEN A USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL LOCATIONS.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see the list of upcoming events from around the world.

Scenario 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should receive a list of cities (suggestions) that match what they’ve typed.

Scenario 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city.

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
As a user
I should be able to select on an event and expand or collapse that event
So that I can see the details of that specific event.

Scenario 1: An event element is collapsed by default
Given a user was on the main page
When nothing is clicked/selected
Then the event details will be collapsed by default

Scenario 2: User can expand an event to see its details
Given a user was on the events page and wanted to see its details
When the expand option is selected
Then the user will see the details of the event

Scenario 3: User can collapse an event to hide its details
Given a user was viewing the events details and wanted to hide its details
When the user clicks on button the close the expanded event
Then the event will collapse to hide its details

FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user,
I should be able to specify the number of events
So that I can manage the number of events shown for my convenience

Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user has not decided how many events to see
When the user opens the main page
Then by default the user will see 32 events

Scenario 2: User can change the number of events they want to see
Given the user wanted to see a specific number of events
When the click the option to choose the number of events shown
Then the user can change the number of events they want to see

FEATURE 4: USE THE APP WHEN OFFLINE
As a user,
I should be able to use the app when I am offline
So that get the information and details of events without requiring an internet connection

Scenario 1: Show cached data when there’s no internet connection
Given the user wanted to use/see the app but did not have an internet connection
When the user opens the app (with cached data)
Then the user will be able to see the cached data

Scenario 2: Show error when user changes the settings (city, time range)
Given the user was offline
When the user tries to change the settings (city, time range, etc.)
Then an error message will appear

FEATURE 5: DATA VISUALIZATION
As a user, 
I should be able to visualise the upcoming events as chart
So that I can better see the number of upcoming events in each city.

Scenario 1: Show a chart with the number of upcoming events in each city
Given the user was on the main page
When the user wants to view upcoming events in each city
Then they will see a chart with the number of events 


INFORMATION ON THE PROJECT

Objective:
To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

WHO:
The users of your Meet application. They could be you, your friends, your professional network, or your potential employers.
WHAT:
A progressive web app with the ability to work offline and a serverless backend developed using a TDD technique.
WHEN:
Users of this app will be able to use it whenever they want to view upcoming events for a specific city. Your recruiter will be able to see your code immediately on GitHub.
WHERE:
The server, in this case, is a serverless function hosted by a cloud provider (e.g., AWS). The application itself is also hosted online to make it shareable and installable. It can be used even when the user is offline. As it’s responsive, it displays well on any device.
WHY:
Serverless is the next generation of cloud infrastructure, PWA provides great user experience and performance, and the TDD technique ensures you have quality code and adequate test coverage. All of these skills, together with data visualization, will distinguish you from other web developers.


Features & Requirements:
Key Features
1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.

User Stories
1. As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
2. As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
3. As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
4. As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
5. As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
6. As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

Technical Requirements
● The app ​must b​ e a React application.
● The app ​must b​ e built using the TDD technique.
● The app ​must​ use the Google Calendar API and OAuth2 authentication flow.
● The app ​must u​ se serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
● The app’s code ​must b​ e hosted in a Git repository on GitHub.
● The app ​must w​ ork on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
● The app ​must d​ isplay well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
● The app ​must​ pass ​Lighthouse​’s PWA checklist.
● The app ​must​ work offline or in slow network conditions with the help of a service worker.
● Users ​may​ be able to install the app on desktop and add the app to their home screen on mobile.
● The app ​must​ be deployed on GitHub Pages.
● The API call ​must​ use React axios and async/await.
● The app ​must​ implement an alert system using an OOP approach to show information to the user.
● The app ​must​ make use of data visualization (recharts preferred).
● The app ​must​ be covered by tests with a coverage rate >= 90%.
● The app ​must​ be monitored using an online monitoring tool.