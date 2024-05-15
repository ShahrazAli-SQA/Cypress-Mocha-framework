# Amrood Labs Assesment

This is a Cypress test automation framework for the **E-Commerce**. It allows you to automate functional tests for the application

## Table of Contents
[Prerequisites](#prerequisites)

[Installation](#installation) 

[Project Structure](#project-structure)

[Test Configuration](#test-configuration)


## Prerequisites
Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed


## Installation

```
- Navigate to the project directory

```
cd dao-ui-automation
``` 
- Install the required Node.js packages
```
npm install
```
## Project Structure

```
├── README.md
├── cypress.config.js
|__ cypress
      |__ e2e
      |__ pageObject
      |__ testData
      |__ fixtures
      |__ support
```
``````


- `README.md` this file
- `cypress.config.js` cypress framework configuration
- `cypress` directory containing cypress tests and all supporting components

 ## Test Configuration
 The test configuration can be found in the ``cypress.config.js`` file. You can customize settings such as the ``base URL``, ``browser``, or ``test environment`` in this file.

## Running Tests

You can run the Cypress tests using the following command
```
 npx cypress open
 ```
 This will open the Cypress Test Runner, allowing you to select and run specific test files or suites.

You can cypress test in headless mode using the following command
 ```
 npm run all:spec
 
 ```

 ## Writing Tests
 All test scripts are located in the ``cypress/e2e`` directory. You can