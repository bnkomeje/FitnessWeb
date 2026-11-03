# FitnessWeb – Architecture Layout Document-Bosco-Ndinda-Nkomeje
# Project: Sprint 3
# Architecture: Hook → Service → Repository

I separated the workout and search code so each part has one job. Hooks manage React state, services handle rules, and the repository manages workout data.
### 1. useWorkouts.tsx — Hook
- What it does: Manages the workout list and errors, and provides functions to load, add, remove, and rename workouts.
- Why here: React state and updates belong in a hook. The hook calls the service instead of changing stored data itself.
- Where used: WorkoutPage.tsx, AddWorkoutPage.tsx, WorkoutSection.tsx, and SearchPage.tsx use it to show or change workouts.
### 2. useSearch.tsx — Hook
- What it does: Manages search text, errors, and the Clear action. It waits 500 milliseconds before validating the input.
- Why here: Search input and timing are React state concerns. The validation rule stays in the service.
- Where used: SearchPage.tsx uses it when users type or clear a search.
### 3. workoutService.tsx — Service
- What it does: Gets, adds, removes, renames, and searches workouts. It checks workout names before making changes.
- Why here: Workout rules belong in one place, not inside pages or the repository.
- Where used: useWorkouts.tsx calls its workout functions. SearchPage.tsx uses searchWorkouts() to find matching names.
### 4. searchService.tsx — Service
- What it does: validateSearch() trims the text and shows an error for a one-character search. An empty search is allowed.
- Why here: Keeping validation separate makes the rule easier to change and test.
- Where used: useSearch.tsx calls it to check the user's search text.
### 5. workoutRepo.tsx — Repository
- What it does: Keeps workouts in memory and provides functions to get, create, update, and delete them. It also notifies listeners when data changes.
- Why here: The repository handles data, while the service handles rules. I also separated the initial workout list into mockWorkoutData.tsx. In Sprint 2, I had 4 initial workouts; in Sprint 3, I created 10. I kept the same Workout type fields: id, name, and videoUrl, so the rest of the app can use the same data format.
- Where used: workoutService.tsx calls the repository functions. The repository gets its starting data from mockWorkoutData.tsx.

### How it works
Adding a workout: Page → useWorkouts → workoutService → workoutRepo. The repository saves the workout, and the page shows the updated list.

Searching for a workout: SearchPage → useSearch → searchService (validation). Then SearchPage calls workoutService.searchWorkouts(), which reads the workouts from workoutRepo and returns matches.

This setup makes my code easier to read, fix, and update because each part has a clear responsibility.