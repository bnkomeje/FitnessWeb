import { useState } from 'react'
import FitnessTipsForm from '../components/fitness-tips-form/FitnessTipsForm'

function FitnessTipsPage() {
  const [newTip, setNewTip] = useState('')

  return (
    <main>
      <h1>Fitness Tips</h1>
      <p>Simple tips to help you stay active and healthy.</p>

      <FitnessTipsForm
        newTip={newTip}
        setNewTip={setNewTip}
      />
    </main>
  )
}

export default FitnessTipsPage