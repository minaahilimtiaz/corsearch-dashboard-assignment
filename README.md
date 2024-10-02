# corsearch-dashboard-assignment

## Functionalities
- Fetch user entries 
- Display user entries on dashboard 
- Sort the users by email in ascending and descending order 
- Filter users by name 
- Responsive design
- Build reusable function components in React
- Implement basic error handling

## Project Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/download)
- npm (Node Package Manager)

### Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|REACT_APP_API_BASE_URL           | URL for backend server           | https://jsonplaceholder.typicode.com      |


### Installation
Clone the repository:
   ```
  git clone git@github.com:minaahilimtiaz/corsearch-dashboard-assignment.git
   cd corsearch-dashboard-assignment
   ```

Install the dependencies
```
npm install
```

# Running the Project
### Starting the project
To start the project in development mode:

```
npm run start
```

### Format
To format the code files:

```
npm run format
```

The app runs at:
```
http://localhost:3000/
```

# Dependencies

- `react-icons`: Provides icons for Ant Design, a popular React UI library.
- `@types/node`: TypeScript type definitions for Node.js, allowing for better development experience when working with Node.js APIs.
- `@types/react`: TypeScript type definitions for React, improving development experience by providing type checking and IntelliSense for React components.
- `axios`: A promise-based HTTP client for making requests to APIs, handling responses, and managing errors in a simple and elegant way.
- `react`: A JavaScript library for building user interfaces, allowing developers to create reusable UI components.
- `typescript`: A superset of JavaScript that adds static types, improving code quality and developer productivity through type checking and enhanced IDE support.
- `@mui/material`: For utlising reusable UI components
- `sass`: To style HTML elements used in React function components

# Dev Dependencies

- `prettier`: An opinionated code formatter that enforces a consistent style by parsing code and re-printing it with its rules.


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the build dir                               |
| **src/components**      | Reusable components used across multiple pages
| **src/page**      | Contains the components for the different routes available in the web app, defining various pages users can navigate to. |
| **src/api**     | Contains all the logic for integrating with backend endpoints, handling API calls and interactions with backend services. |
| package.json             | Contains npm dependencies as well as build scripts   |