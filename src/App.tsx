import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/layout/Layout'
import Home from './pages/Home'
import WorkoutPage from './pages/WorkoutPage'

function App() {

  const [completedWorkouts, setCompletedWorkouts] =
    useState(0)

  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route
          index
          element={<Home />}
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

      </Route>

    </Routes>
  )
}

export default App