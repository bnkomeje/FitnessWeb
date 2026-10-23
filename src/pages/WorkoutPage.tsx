
import type { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import WorkoutSection from '../components/workout-section/WorkoutSection'
import { useWorkouts } from '../hooks/useWorkouts'

type WorkoutPageProps = {
  completedWorkouts: number
  setCompletedWorkouts: Dispatch<SetStateAction<number>>
}

/**
 * WorkoutPage uses useWorkouts to load shared workout data.
 * The hook calls the service, which accesses the repository.
 * The component is responsible for displaying the results.
 */
function WorkoutPage({
  completedWorkouts,
  setCompletedWorkouts
}: WorkoutPageProps) {
  const { workouts, error } = useWorkouts()

  return (
    <main className="workout-page">
      <h1>Workouts</h1>

      <p>Completed Workouts: {completedWorkouts}</p>

      <Link to="/add-workout" className="add-workout-link">
        Add New Workout
      </Link>

      {error && <p role="alert">{error}</p>}

      <WorkoutSection
        workouts={workouts}
        setCompletedWorkouts={setCompletedWorkouts}
      />
    </main>
  )
}

export default WorkoutPage
