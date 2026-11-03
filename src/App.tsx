
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
import GoalsPage from './pages/GoalsPage'

function App() {
  const [completedWorkouts, setCompletedWorkouts] = useState(0)
  const [goals, setGoals] = useState<string[]>([])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="search"
          element={<SearchPage />}
        />

        <Route
          path="workouts"
          element={
            <WorkoutPage
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
            />
          }
        />

        <Route
          path="add-workout"
          element={<AddWorkoutPage />}
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
