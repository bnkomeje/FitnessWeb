import { useState } from 'react'
import WorkoutSection from '../components/workout-section/WorkoutSection'
import WorkoutForm from '../components/workout-form/WorkoutForm'
import type { Workout } from '../types/Workout'

type WorkoutPageProps = {
  completedWorkouts: number
  setCompletedWorkouts:
    React.Dispatch<React.SetStateAction<number>>
}

function WorkoutPage({
  completedWorkouts,
  setCompletedWorkouts
}: WorkoutPageProps) {

  const [workouts, setWorkouts] = useState<Workout[]>([
    {
      id: 1,
      name: 'Running',
      videoUrl: ''
    },
    {
      id: 2,
      name: 'Push-ups',
      videoUrl: ''
    },
    {
      id: 3,
      name: 'Squats',
      videoUrl: ''
    },
    {
      id: 4,
      name: 'Walking',
      videoUrl: ''
    }
  ])

  const [newWorkout, setNewWorkout] = useState('')
  const [videoUrl, setVideoUrl] = useState('')

  function addWorkout() {

    if (newWorkout.trim() === '') {
      return
    }

    const workout: Workout = {
      id: Date.now(),
      name: newWorkout,
      videoUrl: videoUrl
    }

    setWorkouts([
      ...workouts,
      workout
    ])

    setNewWorkout('')
    setVideoUrl('')
  }

  return (
    <section className="workout-page">

      <h2>Workouts</h2>

      <p>
        Completed Workouts: {completedWorkouts}
      </p>

      <WorkoutForm
        newWorkout={newWorkout}
        setNewWorkout={setNewWorkout}
        videoUrl={videoUrl}
        setVideoUrl={setVideoUrl}
        addWorkout={addWorkout}
      />

      <WorkoutSection
        workouts={workouts}
        setWorkouts={setWorkouts}
        setCompletedWorkouts={setCompletedWorkouts}
      />

    </section>
  )
}

export default WorkoutPage