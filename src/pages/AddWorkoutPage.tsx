
import { useState } from 'react'
import { useFormInput } from '../hooks/useFormInput'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWorkouts } from '../hooks/useWorkouts'

/**
 * AddWorkoutPage uses useWorkouts to add workouts.
 * The service validates the name and the repository
 * stores the new workout.
 */
function AddWorkoutPage() {
  const {
    value: workoutName,
    setValue: setWorkoutName
  } = useFormInput('')
  const [videoUrl, setVideoUrl] = useState('')
  const [message, setMessage] = useState('')

  const { addWorkout, error } = useWorkouts()
  const navigate = useNavigate()

  function submitWorkout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const added = addWorkout(workoutName, videoUrl)

    if (added) {
      navigate('/workouts')
    } else {
      setMessage('Please enter a workout name.')
    }
  }

  return (
    <main className="add-workout-page">
      <h1>Add a Workout</h1>

      <form
        className="add-workout-form"
        onSubmit={submitWorkout}
      >
        <label htmlFor="workout-name">
          Workout Name
        </label>

        <input
          id="workout-name"
          type="text"
          placeholder="Example: Push-ups"
          value={workoutName}
          onChange={event =>
            setWorkoutName(event.target.value)
          }
        />

        <label htmlFor="video-url">
          Exercise Video URL
        </label>

        <input
          id="video-url"
          type="text"
          placeholder="https://youtube.com/..."
          value={videoUrl}
          onChange={event =>
            setVideoUrl(event.target.value)
          }
        />

        <p>You are adding: {workoutName}</p>

        {message && <p role="alert">{message}</p>}
        {error && <p role="alert">{error}</p>}

        <button type="submit">
          Add Workout
        </button>

        <button
          type="button"
          onClick={() => navigate('/workouts')}
        >
          Cancel
        </button>
      </form>
    </main>
  )
}

export default AddWorkoutPage
