
import type { FitnessTip } from '../types/FitnessTip'
import {
  getFitnessTips,
  addFitnessTip,
  updateFitnessTip,
  deleteFitnessTip
} from '../repositories/fitnessTipsRepository'

/**
 * Checks if a fitness tip is valid
 */
export function validateFitnessTip(input: string): string {
  const tip = input.trim()

  if (tip.length < 5 || !/[a-zA-Z]/.test(tip)) {
    throw new Error('Please enter a fitness tip (at least 5 characters)')
  }

  return tip
}

/**
 * Gets all fitness tips
 */
export function loadFitnessTips(): FitnessTip[] {
  return getFitnessTips()
}

/**
 * Adds a valid fitness tip
 */
export function createFitnessTip(text: string): FitnessTip {
  return addFitnessTip(validateFitnessTip(text))
}

/**
 * Updates a fitness tip
 */
export function editFitnessTip(id: number, text: string): void {
  updateFitnessTip(id, validateFitnessTip(text))
}

/**
 * Removes a fitness tip
 */
export function removeFitnessTip(id: number): void {
  deleteFitnessTip(id)
}
