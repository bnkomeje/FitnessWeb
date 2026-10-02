import { Link } from 'react-router-dom'

import WorkoutSection
  from '../components/workout-section/WorkoutSection'

import type { Workout } from '../types/Workout'

type WorkoutPageProps = {
  workouts: Workout[]

  setWorkouts:
    React.Dispatch<React.SetStateAction<Workout[]>>

  completedWorkouts: number

  setCompletedWorkouts:
    React.Dispatch<React.SetStateAction<number>>
}

function WorkoutPage({
  workouts,
  setWorkouts,
  completedWorkouts,
  setCompletedWorkouts
}: WorkoutPageProps) {

  return (
    <main className="workout-page">

      <h1>Workouts</h1>

      <p>
        Completed Workouts: {completedWorkouts}
      </p>

      <Link
        to="/add-workout"
        className="add-workout-link"
      >
        Add New Workout
      </Link>

      <WorkoutSection
        workouts={workouts}
        setWorkouts={setWorkouts}
        setCompletedWorkouts={setCompletedWorkouts}
      />

    </main>
  )
}

export default WorkoutPage