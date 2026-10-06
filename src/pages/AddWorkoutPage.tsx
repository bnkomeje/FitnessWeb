import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import type { Workout } from '../types/Workout'

type AddWorkoutPageProps = {

  workouts: Workout[]

  setWorkouts:
    React.Dispatch<React.SetStateAction<Workout[]>>
}


function AddWorkoutPage({
  workouts,
  setWorkouts
}: AddWorkoutPageProps) {

  const [workoutName, setWorkoutName] =
    useState('')

  const [videoUrl, setVideoUrl] =
    useState('')

  const navigate = useNavigate()


  function addWorkout() {

    // Do not add workout if name is empty

    if (!workoutName.trim()) {
      return
    }


    // Create new workout

    const newWorkout: Workout = {

      id: Date.now(),

      name: workoutName,

      videoUrl: videoUrl
    }


    // Add workout to the list

    setWorkouts([
      ...workouts,
      newWorkout
    ])


    // Clear form

    setWorkoutName('')
    setVideoUrl('')


    // Go back to workout page

    navigate('/workouts')
  }


  return (

    <main className="add-workout-page">

      <h1>Add a Workout</h1>


      <div className="add-workout-form">


        {/* WORKOUT NAME */}

        <label htmlFor="workout-name">
          Workout Name
        </label>

        <input
          id="workout-name"
          type="text"
          placeholder="Example: Push-ups"
          value={workoutName}
          onChange={(event) =>
            setWorkoutName(event.target.value)
          }
        />


        {/* VIDEO URL */}

        <label htmlFor="video-url">
          Exercise Video URL
        </label>

        <input
          id="video-url"
          type="text"
          placeholder="https://youtube.com/..."
          value={videoUrl}
          onChange={(event) =>
            setVideoUrl(event.target.value)
          }
        />


        <p>
          You are adding: {workoutName}
        </p>


        {/* ADD BUTTON */}

        <button
          type="button"
          onClick={addWorkout}
        >
          Add Workout
        </button>


        {/* CANCEL BUTTON */}

        <button
          type="button"
          onClick={() =>
            navigate('/workouts')
          }
        >
          Cancel
        </button>

      </div>

    </main>
  )
}

export default AddWorkoutPage