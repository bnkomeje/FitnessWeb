
# Sprint 3 Architecture - Taranpreet Singh

## 1. Custom Hooks

### useFormInput.ts

I made this hook to handle input fields in forms

It has `value`, `setValue`, and `clearValue` to get, change, and clear the input

I used it in FitnessTipsPage and WorkoutForm so I don't need to write the same code again

### useFitnessTips.ts

I made this hook to handle my fitness tips

It keeps track of the tips and uses the service to add, edit, and remove them

I used this hook in FitnessTipsPage

## 2. Service

### fitnessTipsService.ts

I made this service to check the fitness tips before adding or editing them

It checks if the tip has at least 5 characters and contains a letter

It also connects with the repository to get, add, edit, and remove tips

I put the validation here instead of keeping it in the page

## 3. Repository

### fitnessTipsRepository.ts

I made this repository to handle the fitness tips data

It has four main functions

- Add a new tip
- Get all tips
- Edit an existing tip
- Remove a tip

I also added 10 sample fitness tips in `src/data/fitnessTips.ts`

Each tip has an `id` and `text`, which are defined in my `FitnessTip` type

I kept the data code here instead of putting it in the page

## 4. How My Code Works

When someone adds a fitness tip, FitnessTipsPage calls my `useFitnessTips` hook

The hook calls `fitnessTipsService` to check the tip

The service then calls `fitnessTipsRepository` to save it

The same setup is used for editing and removing tips

The code follows this order

FitnessTipsPage → useFitnessTips → fitnessTipsService → fitnessTipsRepository

I also used `useFormInput` to handle the input field in FitnessTipsPage

## 5. Why I Used This Architecture

I separated my code into hooks, services, and repositories so everything is not inside one file

The hook handles the state and connects the page with the service

The service checks the fitness tips

The repository handles the data

This makes my code easier to understand and change later
