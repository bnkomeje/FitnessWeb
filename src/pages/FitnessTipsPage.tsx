import { useFormInput } from '../hooks/useFormInput'
import FitnessTipsForm from '../components/fitness-tips-form/FitnessTipsForm'
import FitnessTipItem from '../components/fitness-tip-item/FitnessTipItem'

/**
 * Shows the fitness tips page.
 */
type FitnessTipsPageProps = {
  completedWorkouts: number
  setCompletedWorkouts: React.Dispatch<React.SetStateAction<number>>
  tips: string[]
  setTips: React.Dispatch<React.SetStateAction<string[]>>
}

function FitnessTipsPage({
  completedWorkouts,
  setCompletedWorkouts,
  tips,
  setTips
}: FitnessTipsPageProps) {
  const {
    value: newTip,
    setValue: setNewTip,
    clearValue
  } = useFormInput('')


/**
 * Adds a new tip to the list.
 */
  const addTip = () => {
    if (newTip.trim() !== '') {
      setTips([...tips, newTip])
      clearValue()
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