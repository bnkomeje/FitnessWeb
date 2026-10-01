import { useState } from 'react'
import FitnessTipsForm from '../components/fitness-tips-form/FitnessTipsForm'
import FitnessTipItem from '../components/fitness-tip-item/FitnessTipItem'

// Page for fitness tips.
function FitnessTipsPage() {
  const [newTip, setNewTip] = useState('')

  const [tips, setTips] = useState<string[]>([
    'Stay hydrated',
    'Warm up before exercising',
    'Get enough sleep'
  ])

  // Adds a new fitness tip to the list.
  const addTip = () => {
    if (newTip.trim() !== '') {
      setTips([...tips, newTip])
      setNewTip('')
    }
  }

  // Removes a fitness tip from the list.
  const removeTip = (indexToRemove: number) => {
    setTips(tips.filter((_, index) => index !== indexToRemove))
  }

  return (
    <main>
      <h1>Fitness Tips</h1>
      <p>Simple tips to help you stay active and healthy.</p>

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