import WorkoutCard from '../workout-card/WorkoutCard'
import type { Workout } from '../../types/Workout'

type WorkoutSectionProps = {
  workouts: Workout[]

  setWorkouts:
    React.Dispatch<React.SetStateAction<Workout[]>>

  setCompletedWorkouts:
    React.Dispatch<React.SetStateAction<number>>
}

function WorkoutSection({
  workouts,
  setWorkouts,
  setCompletedWorkouts
}: WorkoutSectionProps) {

  function removeWorkout(id: number) {

    setWorkouts(
      workouts.filter(
        (workout) => workout.id !== id
      )
    )
  }

  function completeWorkout() {

    setCompletedWorkouts(
      (currentTotal) => currentTotal + 1
    )
  }

  return (
    <section className="workout-section">

      <h2>Your Workouts</h2>

      <p>
        Choose from your available workouts.
      </p>

      <div className="workout-list">

        {workouts.map((workout) => (

          <WorkoutCard
            key={workout.id}
            workout={workout}
            removeWorkout={removeWorkout}
            completeWorkout={completeWorkout}
          />

        ))}

      </div>

    </section>
  )
}

export default WorkoutSection