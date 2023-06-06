## Challenge

This is an automation challenge where two validations are made, one for the API and the other for the UI, in this automation some necessary validations were made.

API Test should do the following:
    1) Call https://api.publicapis.org/entries
    2) Read the response, find all objects with property “Category: Authentication & Authorization”
    3) Compare, count, and verify the number of objects where the property above appears
    4) Finally print found objects to console

UI Test should do the following:
    1) Go to https://www.saucedemo.com/
    2) Log in to the site. Verify that the items are sorted by Name ( A -> Z ).
    3) Change the sorting to Name ( Z -> A).
    4) Verify that the items are sorted correctly.


### Testing Tools

Playwright
Javascript
Jest
Supertes
Allure Report

### How to run?

To run the API tests, you need to enter the command below in your terminal:

`npm run api`

these command will run the API playlist.

To run the PORTAL tests, you need to enter the command below in your terminal:

`npm run portal`

these command will run the Portal playlist.

### Generate Report

if you need to generate the report, enter this command below in your terminal.

`npm run report`