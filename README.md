## NY TIMES

# Contents

## :point_right: :point_right: :point_right: :point_right: INDEX :point_left: :point_left: :point_left: :point_left:

1. [Overview](#overview)
2. [Description](#description)
3. [Installation](#installation)
4. [ENV file sample ](#env-file-sample)
5. [Ports required](#ports-required)
6. [Running Cypress Tests](#running-cypress-test)
7. [Jest Unit Testing](#just-unit-test)
8. [Setting Up SonarQube](#setting-sonarqube)
9. [Running SonarQube Analysis](#sonarqube-analysis)
10. [Build Application](#build-app)

## Overview

This React application uses Material-UI (MUI) for UI components and styling, TypeScript for type safety, Redux for state management, and Axios for HTTP requests. Cypress handles UI testing for comprehensive end-to-end tests, while Jest ensures unit components and functions behave as expected.

SonarQube is integrated to maintain high code quality, analyzing for bugs, vulnerabilities, and code issues, ensuring best practices are followed.

## Description

This project is a React application that fetches articles from the New York Times API and dynamically displays them. Users can browse through a list of articles fetched in real-time from the API. Clicking on an article navigates the user to a detailed page dedicated to that specific article, where they can read more about it, view related media, and explore additional details provided by the New York Times.

The application provides a seamless user experience by leveraging React's component-based architecture and state management capabilities. It aims to showcase how to integrate external APIs into a React application and handle dynamic routing for detailed content pages.

## Installation

### :point_right: Local setup

1. Install latest node js based on your operating system

2. Clone from git repository

```
git clone https://github.com/nighilramachandran/nytimes.git`
```

3. Rename sample.local.env to .env.local

```
NOTE: Please rename sample.local.env to .env.local;

Update the variables in the file and proceed to further steps. its mandatory to set the enviroment variables before we get into further steps.

```

4. Navigate into the folder

`cd nytimes`

5. Install packages

```
npm install
```

6. Run the project

```
npm start
```

:rocket: :rocket: start browsing the application on localhost:3000 :rocket: :rocket:

## ENV file sample

| Variable Name     | Description                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| REACT_APP_API_KEY | Environment variable used in your React application to securely access and authenticate with an API. |

## Ports required

| Ports required | Is required on deployment | Is required on development |
| -------------- | ------------------------- | -------------------------- |
| 3000           | No                        | Yes                        |

```
NOTE: Please run the application before you start running the test

```

### :point_right: Running Cypress Tests

### Interactive Mode

1. Open your terminal.

2. Type the following command and press Enter:

```
npx cypress open
```

This will launch the Cypress Test Runner.

3. In the Cypress Test Runner window:

   - Choose "e2e" testing, which is pre-configured for this app.
   - Select your preferred browser from the dropdown menu.
   - Click on a spec file under cypress/integration to start running tests for each page.

### Headless Mode

To run tests headlessly (suitable for CI/CD pipelines), use:

1. Open your terminal.

2. Type the following command and press Enter:

```
npx cypress run
```

This command executes Cypress tests in the background without launching a browser window. It's ideal for automated testing in continuous integration environments.You will find the results similar to the following.

![cypress-headless](/public/assets/images/cypress-headless.png)

### :point_right: Jest Unit Testing

1. Open your terminal.

2. Type the following command and press Enter:

```
npm run test
```

3. Choose the Watch usage by pressing the available option as shown below

- › Press a to run all tests.
- › Press f to run only failed tests.
- › Press q to quit watch mode.
- › Press p to filter by a filename regex pattern.
- › Press t to filter by a test name regex pattern.
- › Press Enter to trigger a test run.

4. Press a to see the result as shown below

![cypress-headless](/public/assets/images/jest-test.png)

### :point_right: Setting Up SonarQube

1. Start SonarQube Services

2. Access SonarQube Web Interface by

   - Open your browser and go to [http://localhost:9000](http://localhost:9000).

3. Create a New Project

   - Click on "Create new project" and follow the prompts to create a new project in SonarQube.

4. Generate and Copy the Project Token

   - After creating the project, generate a token and copy it. This token is used for authentication during analysis.

### Running SonarQube Analysis

To run the SonarQube scanner and analyze your project locally:

1. Open your terminal.

2. Run the following command, replacing `your_project_key`, `your_sonar_token`, and adjusting other parameters as needed:

   ```
   sonar-scanner \
     -Dsonar.projectKey=your_project_key \
     -Dsonar.sources=. \
     -Dsonar.host.url=http://localhost:9000 \
     -Dsonar.login=your_sonar_token
   ```

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
