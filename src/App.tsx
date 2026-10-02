import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/layout/Layout'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import WorkoutPage from './pages/WorkoutPage'
import AddWorkoutPage from './pages/AddWorkoutPage'
import HelpPage from './pages/HelpPage'

import type { Workout } from './types/Workout'
import { initialWorkouts } from './data/workouts'

function App() {

  const [completedWorkouts, setCompletedWorkouts] =
    useState(0)

  const [workouts, setWorkouts] =
    useState<Workout[]>(initialWorkouts)

  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route
          index
          element={<Home />}
        />

        <Route
          path="search"
          element={
            <SearchPage
              workouts={workouts}
            />
          }
        />

        <Route
          path="workouts"
          element={
            <WorkoutPage
              workouts={workouts}
              setWorkouts={setWorkouts}
              completedWorkouts={completedWorkouts}
              setCompletedWorkouts={setCompletedWorkouts}
            />
          }
        />

        <Route
          path="add-workout"
          element={
            <AddWorkoutPage
              workouts={workouts}
              setWorkouts={setWorkouts}
            />
          }
        />

        <Route
          path="help"
          element={<HelpPage />}
        />

      </Route>

    </Routes>
  )
}

export default App