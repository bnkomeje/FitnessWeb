
import { useEffect, useState } from 'react'
import type { Workout } from '../types/Workout'
import * as WorkoutService from '../services/workoutService'

/**
 * Reusable presentation hook for workout components.
 *
 * workouts: current workout list to display.
 * error: error message when an operation fails.
 * refreshWorkouts: reloads workouts from the service.
 * addWorkout: adds a validated workout.
 * removeWorkout: deletes a workout by ID.
 * renameWorkout: changes an existing workout name.
 */
export function useWorkouts() {
  const [workouts, setWorkouts] = useState<Workout[]>(
    () => WorkoutService.fetchWorkouts()
  )

  const [error, setError] = useState<string | null>(null)

  function refreshWorkouts() {
    try {
      setWorkouts(WorkoutService.fetchWorkouts())
      setError(null)
    } catch (problem) {
      setError(String(problem))
    }
  }

  useEffect(() => {
    const unsubscribe = WorkoutService.subscribe(() => {
      setWorkouts(WorkoutService.fetchWorkouts())
    })

    return unsubscribe
  }, [])

  function addWorkout(
    name: string,
    videoUrl: string
  ): boolean {
    try {
      setError(null)
      return WorkoutService.addWorkout(name, videoUrl)
    } catch (problem) {
      setError(String(problem))
      return false
    }
  }

  function removeWorkout(id: number): void {
    try {
      setError(null)
      WorkoutService.removeWorkout(id)
    } catch (problem) {
      setError(String(problem))
    }
  }

  function renameWorkout(
    id: number,
    name: string
  ): boolean {
    try {
      setError(null)
      return WorkoutService.renameWorkout(id, name)
    } catch (problem) {
      setError(String(problem))
      return false
    }
  }

  return {
    workouts,
    error,
    refreshWorkouts,
    addWorkout,
    removeWorkout,
    renameWorkout
  }
}
