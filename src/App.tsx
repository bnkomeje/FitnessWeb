import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/layout/Layout'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import WorkoutPage from './pages/WorkoutPage'
import AddWorkoutPage from './pages/AddWorkoutPage'
import HelpPage from './pages/HelpPage'
import FitnessTipsPage from './pages/FitnessTipsPage'

import type { Workout } from './types/Workout'
import { initialWorkouts } from './data/workouts'
import GoalsPage from './pages/GoalsPage'
import { loadFitnessTips } from './services/fitnessTipsService'
function App() {

  const [completedWorkouts, setCompletedWorkouts] =
    useState(0)

  const [workouts, setWorkouts] =
    useState<Workout[]>(initialWorkouts)
  
  const [goals, setGoals] = useState<string[]>([])  

  const [tips, setTips] = useState<string[]>(loadFitnessTips)

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
          path="fitness-tips"
          element={
            <FitnessTipsPage
              completedWorkouts={completedWorkouts}
              setCompletedWorkouts={setCompletedWorkouts}
              tips={tips}
              setTips={setTips}
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

        <Route
          path="goals"
          element={
            <GoalsPage
              goals={goals}
              setGoals={setGoals}
            />
          }
        />

      </Route>

    </Routes>
  )
}

export default App