
import { useFormInput } from '../hooks/useFormInput'
import FitnessTipsForm from '../components/fitness-tips-form/FitnessTipsForm'
import FitnessTipItem from '../components/fitness-tip-item/FitnessTipItem'
import { validateFitnessTip } from '../services/fitnessTipsService'

type FitnessTipsPageProps = {
  completedWorkouts: number
  setCompletedWorkouts: React.Dispatch<React.SetStateAction<number>>
  tips: string[]
  setTips: React.Dispatch<React.SetStateAction<string[]>>
}

/**
 * Shows the fitness tips page
 */
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
   * Adds a valid fitness tip
   */
  const addTip = () => {
    try {
      const tip = validateFitnessTip(newTip)
      setTips([...tips, tip])
      clearValue()
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }

  /**
   * Removes a fitness tip
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
