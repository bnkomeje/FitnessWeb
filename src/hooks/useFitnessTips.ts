
import { useState } from 'react'
import type { FitnessTip } from '../types/FitnessTip'
import {
  loadFitnessTips,
  createFitnessTip,
  editFitnessTip,
  removeFitnessTip
} from '../services/fitnessTipsService'

/**
 * Manages fitness tips for the page
 */
export function useFitnessTips() {
  const [tips, setTips] = useState<FitnessTip[]>(loadFitnessTips)

  /**
   * Adds a fitness tip
   */
  const addTip = (text: string) => {
    createFitnessTip(text)
    setTips(loadFitnessTips())
  }

  /**
   * Updates a fitness tip
   */
  const updateTip = (id: number, text: string) => {
    editFitnessTip(id, text)
    setTips(loadFitnessTips())
  }

  /**
   * Removes a fitness tip
   */
  const deleteTip = (id: number) => {
    removeFitnessTip(id)
    setTips(loadFitnessTips())
  }

  return { tips, addTip, updateTip, deleteTip }
}
