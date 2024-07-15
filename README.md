Setup the Project in the Machine:
---------------------------------
1) Download the Project (Cypress Assignment from repository)
2) Install Node
3) Install VS Code
4) Open the Downloaded project in the New Work Space (or) Existing Workspace
5) Open the Terminal 
Install cypress, xpath, mochawesome using terminal.

commands:
---------
(Cypress - npm install cypress --save-dev ,
Xpath - npm i cypress-xpath,
mochawesome - npm i cypress-mochawesome-reporter
)


Run the Project
---------------
Notes:
------
"Only For a valid signup scenario for Test Case 3 (TC3), the email ID and username must be updated or edited each time.(Only for the TC3)

To avoid the difficulty of editing the test case directly, we can easily update the email ID and username in the `example.json` file located in the fixture.

1) After initializing the project on the local machine, navigate to the appropriate path to update the username and email.

CYPRESSASSIGNMENT -> cypress -> fixtures -> example.json

2) Click example.json

3) Update the Email and username accordingly
(Notes:
-------
You must edit this before each test run, ensuring that the email and username are unique and not previously used.)

4) "After that, open the terminal to run the tests. Here are some scripts I created for user convenience:

chrome: npm run chrome
edge: npm run edge"

5) After the test run is complete, refresh the project.

6) To view the report, navigate to the report folder where the Mochawesome HTML reports are located. Copy the file path of the HTML report and paste it into your browser to view it.

CYPRESSASSIGNMENT -> cypress -> reports -> .HTMLreports

Here, Copy the HTML path and paste into the browser



