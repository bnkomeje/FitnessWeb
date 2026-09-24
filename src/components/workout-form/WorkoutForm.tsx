type WorkoutFormProps = {
  newWorkout: string
  setNewWorkout:
    React.Dispatch<React.SetStateAction<string>>

  videoUrl: string
  setVideoUrl:
    React.Dispatch<React.SetStateAction<string>>

  addWorkout: () => void
}

function WorkoutForm({
  newWorkout,
  setNewWorkout,
  videoUrl,
  setVideoUrl,
  addWorkout
}: WorkoutFormProps) {

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    if (newWorkout.trim() === '') {
      return
    }

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
          value={newWorkout}
          onChange={(event) =>
            setNewWorkout(event.target.value)
          }
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

      <p>
        You are adding: {newWorkout}
      </p>

      <button type="submit">
        Add Workout
      </button>

    </form>
  )
}

export default WorkoutForm