
import type { FitnessTip } from '../types/FitnessTip'
import { fitnessTips } from '../data/fitnessTips'

let tips: FitnessTip[] = fitnessTips.map(tip => ({ ...tip }))

/**
 * Gets all fitness tips
 */
export function getFitnessTips(): FitnessTip[] {
  return tips.map(tip => ({ ...tip }))
}

/**
 * Adds a new fitness tip
 */
export function addFitnessTip(text: string): FitnessTip {
  const newTip: FitnessTip = {
    id: Math.max(0, ...tips.map(tip => tip.id)) + 1,
    text
  }

  tips = [...tips, newTip]
  return { ...newTip }
}

/**
 * Updates a fitness tip
 */
export function updateFitnessTip(id: number, text: string): void {
  tips = tips.map(tip =>
    tip.id === id ? { ...tip, text } : tip
  )
}

/**
 * Removes a fitness tip
 */
export function deleteFitnessTip(id: number): void {
  tips = tips.filter(tip => tip.id !== id)
}
