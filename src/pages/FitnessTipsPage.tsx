import { useState } from 'react'
import FitnessTipsForm from '../components/fitness-tips-form/FitnessTipsForm'
import FitnessTipItem from '../components/fitness-tip-item/FitnessTipItem'
import { validateFitnessTip } from '../services/fitnessTipsService'

/**
 * Shows the fitness tips page.
 */
type FitnessTipsPageProps = {
  completedWorkouts: number
  setCompletedWorkouts: React.Dispatch<React.SetStateAction<number>>
}

function FitnessTipsPage({
  completedWorkouts,
  setCompletedWorkouts
}: FitnessTipsPageProps) {
  const [newTip, setNewTip] = useState('')

  const [tips, setTips] = useState<string[]>([
    'Stay hydrated',
    'Warm up before exercising',
    'Get enough sleep'
  ])

/**
 * Adds a new tip to the list.
 */
  
  const addTip = () => {
    try {
      const tip = validateFitnessTip(newTip)
      setTips([...tips, tip])
      setNewTip('')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }


/**
 * Removes a tip from the list.
 */
  const removeTip = (indexToRemove: number) => {
    setTips(tips.filter((_, index) => index !== indexToRemove))
  }

  return (
    <main>
      <h1>Fitness Tips</h1>
      <p>Simple tips to help you stay active and healthy.</p>

      <p>Completed Workouts: {completedWorkouts}</p>

      <button
        type="button"
        onClick={() => setCompletedWorkouts(completedWorkouts + 1)}
      >
        Add Completed Workout
      </button>

      <FitnessTipsForm
        newTip={newTip}
        setNewTip={setNewTip}
        onAdd={addTip}
      />

      {/* Displays all fitness tips. */}
      <ul>
        {tips.map((tip, index) => (
          <FitnessTipItem
            key={`${tip}-${index}`}
            tip={tip}
            onRemove={() => removeTip(index)}
          />
        ))}
      </ul>
    </main>
  )
}

export default FitnessTipsPage