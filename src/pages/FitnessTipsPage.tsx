
import { useFormInput } from '../hooks/useFormInput'
import { useFitnessTips } from '../hooks/useFitnessTips'
import FitnessTipsForm from '../components/fitness-tips-form/FitnessTipsForm'
import FitnessTipItem from '../components/fitness-tip-item/FitnessTipItem'

type FitnessTipsPageProps = {
  completedWorkouts: number
  setCompletedWorkouts: React.Dispatch<React.SetStateAction<number>>
}

/**
 * Shows the fitness tips page
 * Uses hook, service and repository to manage tips
 */
function FitnessTipsPage({
  completedWorkouts,
  setCompletedWorkouts
}: FitnessTipsPageProps) {
  const { tips, addTip, deleteTip } = useFitnessTips()

  const {
    value: newTip,
    setValue: setNewTip,
    clearValue
  } = useFormInput('')

  /**
   * Adds a new fitness tip
   */
  const handleAddTip = () => {
    try {
      addTip(newTip)
      clearValue()
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
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
        onAdd={handleAddTip}
      />

      <ul>
        {tips.map(tip => (
          <FitnessTipItem
            key={tip.id}
            tip={tip.text}
            onRemove={() => deleteTip(tip.id)}
          />
        ))}
      </ul>
    </main>
  )
}

export default FitnessTipsPage
