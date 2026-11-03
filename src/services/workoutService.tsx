
import * as WorkoutRepo from '../repository/workoutRepo'
import type { Workout } from '../types/Workout'

export function fetchWorkouts(): Workout[] {
  return WorkoutRepo.fetchWorkouts()
}

export function subscribe(
  listener: () => void
): () => void {
  return WorkoutRepo.subscribe(listener)
}

export function addWorkout(
  name: string,
  videoUrl: string
): boolean {
  const cleanedName = name.trim()

  if (!cleanedName) {
    return false
  }

  const workouts = WorkoutRepo.fetchWorkouts()

  const id = Math.max(
    0,
    ...workouts.map(workout => workout.id)
  ) + 1

  WorkoutRepo.createWorkout({
    id,
    name: cleanedName,
    videoUrl: videoUrl.trim()
  })

  return true
}

export function removeWorkout(id: number): void {
  WorkoutRepo.deleteWorkout(id)
}

export function renameWorkout(
  id: number,
  name: string
): boolean {
  const cleanedName = name.trim()

  if (!cleanedName) {
    return false
  }

  const workout = WorkoutRepo.getWorkoutById(id)

  if (!workout) {
    return false
  }

  WorkoutRepo.updateWorkout({
    ...workout,
    name: cleanedName
  })

  return true
}

export function searchWorkouts(
  term: string
): Workout[] {
  const searchTerm = term.trim().toLowerCase()

  return WorkoutRepo.fetchWorkouts().filter(workout =>
    workout.name.toLowerCase().includes(searchTerm)
  )
}
