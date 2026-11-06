
import { useFormInput } from '../../hooks/useFormInput'

type WorkoutFormProps = {
  newWorkout: string
  setNewWorkout:
    React.Dispatch<React.SetStateAction<string>>

  videoUrl: string
  setVideoUrl:
    React.Dispatch<React.SetStateAction<string>>

  addWorkout: () => void
}
// WorkoutForm already receives newWorkout and setNewWorkout but 
// also received from useFormInput hook?
function WorkoutForm({
  newWorkout,
  setNewWorkout,
  videoUrl,
  setVideoUrl,
  addWorkout
}: WorkoutFormProps) {
  const {
    value: workoutName,
    setValue: setWorkoutName
  } = useFormInput(newWorkout)

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    if (workoutName.trim() === '') {
      return
    }

    setNewWorkout(workoutName)
    addWorkout()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Workout</h3>

      <div>
        <label htmlFor="workout-name">
          Workout Name
        </label>

        <input
          id="workout-name"
          type="text"
          value={workoutName}
          onChange={(event) => {
            setWorkoutName(event.target.value)
            setNewWorkout(event.target.value)
          }}
          placeholder="Example: Push-ups"
          required
        />
      </div>

      <div>
        <label htmlFor="video-url">
          Exercise Video URL
        </label>

        <input
          id="video-url"
          type="url"
          value={videoUrl}
          onChange={(event) =>
            setVideoUrl(event.target.value)
          }
          placeholder="https://youtube.com/..."
        />
      </div>

      <p>You are adding: {workoutName}</p>

      <button type="submit">
        Add Workout
      </button>
    </form>
  )
}

export default WorkoutForm
