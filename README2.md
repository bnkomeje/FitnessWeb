# FitnessWeb

FitnessWeb is a fitness web application developed using React, TypeScript, Vite, and React Router. The application is designed to help users manage their workouts, track completed exercises, search for workouts, and watch exercise videos.

The project was developed as a team project with a focus on creating reusable React components, managing application state, and using routing to create multiple pages.

## Purpose of the Project

The purpose of FitnessWeb is to provide users with a simple place to manage their fitness activities.
Users can view available workouts, add their own workouts, mark workouts as completed, remove workouts, and search for specific exercises.
The application also allows exercise videos to be included with workouts so users can watch demonstrations without leaving the website.

## Features

### Home Page

The Home page introduces users to the FitnessWeb application and provides access to the main features of the website.

### Workout Page

The Workout page displays the available workouts.

Users can:

- View their workouts
- Mark a workout as completed
- Remove a workout
- View exercise videos
- See the number of completed workouts

### Add Workout

Users can add a new workout to the application.

A workout can include:

- Workout name
- Exercise video URL

After the workout is added, it becomes part of the workout list.

### Search

The Search page allows users to search for workouts by name.

The results update based on what the user enters in the search field. The page also shows the number of workouts found.

### Exercise Videos

Workouts can contain YouTube exercise videos.

The videos are embedded into the application so users can watch the exercise demonstration directly on FitnessWeb.

### Completed Workouts

Users can click the Complete button after finishing a workout.

The application keeps track of the number of workouts that have been completed.

### Remove Workout

Users can remove workouts they no longer want in their workout list.

### Fitness Tips

The Fitness Tips page provides simple fitness tips to help users stay active and healthy.

Users can:

- View fitness tips
- Add their own fitness tips
- Remove fitness tips
- See the list update immediately after adding or removing a tip
- View and update the shared completed workout count

The Fitness Tips feature uses reusable React components. The form component receives state and setter methods through props, and the fitness tip items are rendered from a list.

The Fitness Tips page uses React state to manage the fitness tips list and the form input. Users can add a new tip or remove an existing tip, and the page updates immediately.

The completed workout count is shared between the Workout page and Fitness Tips page. The state is created in App.tsx and passed to the Feature Pages using props. This allows a change made on one page to be shown on another page.

The navigation uses React Router NavLink. The active page is highlighted so users can see which page they are currently viewing.

### Help Page

The Help page provides simple information about how the FitnessWeb application works and explains how users can use the main features.

## Technologies Used

The project uses the following technologies:
- React
- TypeScript
- Vite
- React Router
- HTML
- CSS
- JavaScript
- Git
- GitHub

## React Concepts Used

FitnessWeb demonstrates several React concepts, including:
- Components
- Props
- State
- Event handling
- Conditional rendering
- List rendering
- React Router
- NavLink
- Outlet


## How the Application Works

The main workout data is stored in the application and passed to different components using props.
React state is used to manage the workout list and the number of completed workouts.
When a user adds a workout, the workout is added to the existing workout list.
When a user removes a workout, it is removed from the list.
When the Complete button is clicked, the completed workout count increases.
The Search page uses the same workout data and filters the workouts based on the user's search.
React Router controls which page is displayed. The Layout component contains the navigation, header, footer, and Outlet. The selected page is displayed inside the Outlet.

## Installation

Clone the repository:

bash
git clone https://github.com/bnkomeje/FitnessWeb.git


Move into the project folder:
bash
cd FitnessWeb

Install the required dependencies:
bash
npm install


## Running the Application

Start the Vite development server:
npm run dev

Vite will provide a local development URL.
Open that URL in your browser to use the application.

## Development Workflow

The project uses Git and GitHub for version control and team collaboration.

Feature branches are used to develop new functionality before the changes are merged into the develop branch.

The general workflow is:

1. Create a feature branch.
2. Make the required changes.
3. Test the application.
4. Commit the changes.
5. Push the branch to GitHub.
6. Create a pull request.
7. Request a team member to review the changes.
8. Merge approved changes into develop.

## Future Improvements

Some features that could be added in the future include:

- User login and registration
- Fitness goals
- Workout progress tracking
- Favorite workouts
- Workout categories
- More fitness tips
- User profiles
- Improved search filters

## Team Members

- Bosco Nkomeje
- Taranpreet Singh

## Project Status

FitnessWeb is currently under development. New features and improvements will continue to be added during future sprints.