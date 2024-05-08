# Introduction

This is a project 

# Requirements:

• Use React with functional components and hooks: DONE
• Use Typescript for type annotations and improved code structure: DONE
• fetches a list of users from an API (e.g., https://randomuser.me/) and displays them in a user-friendly format: DONE
• Style the user list with rich CSS, potentially using a styling library like Styled Components: DONE
• Use router for page navigation: DONE
• The application should display:
  o A loading indicator while data is being fetched: DONE
  o User details if logged in to the app: DONE

Bonus Points:
• Integrate unit tests for critical components using a testing framework like Jest: DONE (testing the domain feature only)


Additional Bonus Points:
• Pagination
• Search Filter
• Error Boundaries
• Basic caching layer for API
• API Interceptor error catcher
• API standard hook data / meta hook
• Debounce integrated
• Alias configurations
• Separation of concerns

# Starting up project

## Install

Install the project dependencies

```
yarn
```

## Create an .env file

Create an .env file in the root of the project.  Copy the contents from .env.defaults into the .env file or use the below configurations

```
VITE_BASEURL=http://localhost:3000/results
VITE_TOTAL_RECORD_COUNT=200
NOTIFICATION_DURATION=10
```

## Start the React app

Start the React app

```
yarn dev
```

## Start the JSON server

Install the json server

https://github.com/typicode/json-server/tree/v0?tab=readme-ov-file#getting-started

```
npm install -g json-server@0.17.4    # NPM
yarn global add json-server@0.17.4   # Yarn
```

Run the json server

```
yarn server
```

## View the App

Providing both vite and json-server have started successfully, go to your favourite browser and open the following URL: http://localhost:5173/

# Folder Architecture

This is a small project but still has enough components to utilise a domain folder structure. By abstracting out reuseable components, I have focused on 2 key component domains common and Users. The folder structure will be similar to the following:

components
|  +-- Users
|     +-- components
|         +-- UserSearch
|             +-- UserSearch.tsx
|             +-- UserSearch.styles.ts
|             +-- useUserSearch.ts
|     +-- Users.tsx
|     +-- useUsers.ts
|     +-- Users.utils.ts
|     +-- Users.styles.ts
|  +-- common (project reusable zone)
|     +-- components
|     +-- hooks
|     +-- styles
|     +-- utils
+-- styles
App.tsx