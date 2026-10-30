
import type { Workout } from '../types/Workout'
import { workoutData } from './mockWorkoutData'

let workouts: Workout[] = workoutData.map(workout => ({
  ...workout
}))

const listeners = new Set<() => void>()

function notifyListeners(): void {
  listeners.forEach(listener => listener())
}

export function subscribe(
  listener: () => void
): () => void {
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
  }
}

export function fetchWorkouts(): Workout[] {
  return workouts.map(workout => ({ ...workout }))
}

export function getWorkoutById(
  id: number
): Workout | undefined {
  const workout = workouts.find(workout => workout.id === id)

  return workout ? { ...workout } : undefined
}

export function createWorkout(workout: Workout): Workout {
  if (getWorkoutById(workout.id)) {
    throw new Error('Workout ID already exists')
  }

  workouts = [...workouts, { ...workout }]
  notifyListeners()

  return { ...workout }
}

export function updateWorkout(workout: Workout): Workout {
  if (!getWorkoutById(workout.id)) {
    throw new Error('Workout not found')
  }

  workouts = workouts.map(current =>
    current.id === workout.id ? { ...workout } : current
  )

  notifyListeners()

  return { ...workout }
}

export function deleteWorkout(id: number): void {
  if (!getWorkoutById(id)) {
    throw new Error('Workout not found')
  }

  workouts = workouts.filter(workout => workout.id !== id)
  notifyListeners()
}
