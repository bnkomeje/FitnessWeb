import type { Workout } from '../../types/Workout'

type WorkoutCardProps = {
  workout: Workout
  removeWorkout: (id: number) => void
  completeWorkout: () => void
}

function WorkoutCard({
  workout,
  removeWorkout,
  completeWorkout
}: WorkoutCardProps) {

  return (
    <article className="workout-card">

      <h3>{workout.name}</h3>

      {workout.videoUrl && (
        <a
          href={workout.videoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Watch Exercise Video
        </a>
      )}

      <div className="workout-actions">

        <button
          onClick={completeWorkout}
        >
          Complete
        </button>

        <button
          onClick={() =>
            removeWorkout(workout.id)
          }
        >
          Remove
        </button>

      </div>

    </article>
  )
}

export default WorkoutCard