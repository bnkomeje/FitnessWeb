# Sprint Retrospective – FitnessWeb

## 1. What Went Well in This Sprint?

One thing that went well was the development of the Workout feature. I improved the Workout page so users can view workouts, add new workouts, remove workouts, and mark workouts as completed. I also added exercise videos that users can watch directly from the application. This made the Workout section more useful and interactive.

Another thing that went well was adding routing and navigation. I worked on connecting pages such as Search, Add Workout, and Help using React Router. This allowed users to move between different parts of FitnessWeb without reloading the application.

Collaboration with my teammate also went well. We worked on different features using separate branches and used pull requests to bring our work into the `develop` branch. For example, my teammate worked on the Fitness Tips feature while I worked on other parts of the application. We reviewed each other's pull requests before merging them.

I also improved my understanding of React state and props. The workout data is stored in state and can be passed to different pages. For example, the Search page uses the existing workout data to find workouts by name.


## 2. What Could Have Gone Better in This Sprint?

One challenge was working on shared files. My teammate and I sometimes needed to modify files such as `App.tsx`, `Layout.tsx`, and the Help page. This meant I had to make sure that I had the latest version of `develop` before continuing my work.

I also had some problems when adding new routes. For example, after creating the Help page, the Help navigation link was still pointing to `/`. This caused the Home page to appear when Help was clicked. I had to change the navigation link to `/help` and make sure the Help route existed in `App.tsx`.

Another challenge was that adding one feature sometimes required changes in several files. For example, adding Search required creating the Search page, adding the route, passing workout data to the page, and updating the navigation. Missing one of these steps caused the feature not to work as expected.

Testing could also have been done earlier. Some problems were found after I had already made several changes. Testing after each small change would have made it easier to identify and fix problems.


## 3. What Can I Do in the Next Sprint to Improve My Process?

### Goal 1: Keep My Branch Updated

Before starting each new feature in the next sprint, I will pull the latest changes from the `develop` branch before creating or continuing my feature branch.

My goal is to do this before starting 100% of my assigned features during the next sprint. This will help reduce merge conflicts between my work and my teammate's work.


### Goal 2: Test Every Feature Before Creating a Pull Request

During the next sprint, I will manually test every feature I complete before creating a pull request.

I will check that the page loads, navigation works, buttons perform the expected actions, and the feature does not break existing pages. My goal is to test 100% of my completed features before requesting a review from my teammate.


### Goal 3: Finish Tasks Earlier

I will aim to complete my assigned coding tasks at least two days before the next Sprint Review.

I will use the remaining time to test the application, fix problems, review my teammate's pull requests, and update documentation. This will help reduce last-minute work before submission.

