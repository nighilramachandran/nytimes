## NY TIMES

# Contents

## :point_right: :point_right: :point_right: :point_right: INDEX :point_left: :point_left: :point_left: :point_left:

1. [Description](#description)
2. [Installation](#installation)
3. [ENV file sample ](#env-file-sample)
4. [Ports required](#ports-required)

## 1. Description

This project is a React application that fetches articles from the New York Times API and dynamically displays them. Users can browse through a list of articles fetched in real-time from the API. Clicking on an article navigates the user to a detailed page dedicated to that specific article, where they can read more about it, view related media, and explore additional details provided by the New York Times.

The application provides a seamless user experience by leveraging React's component-based architecture and state management capabilities. It aims to showcase how to integrate external APIs into a React application and handle dynamic routing for detailed content pages.

## 2. Installation

### :point_right: Local setup

1. Install latest node js based on your operating system

2. Clone from git repository

`git clone https://github.com/nighilramachandran/nytimes.git`

3. Rename sample.local.env to .env.local

```
NOTE: please rename sample.local.env to .env.local;

Update the variables in the file and proceed to further steps. its mandatory to set the enviroment variables before we get into further steps.
```

## 3. ENV file sample

| Variable Name     | Description                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| REACT_APP_API_KEY | Environment variable used in your React application to securely access and authenticate with an API. |

## :point_right: 4. Ports required

| Ports required | Is required on deployment | Is required on development |
| -------------- | ------------------------- | -------------------------- |
| 3000           | No                        | Yes                        |

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
