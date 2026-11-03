import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

type GoalsPageProps = {
  goals: string[]
  setGoals: Dispatch<SetStateAction<string[]>>
}

function GoalsPage({ goals, setGoals }: GoalsPageProps) {
  const [newGoal, setNewGoal] = useState('')

  function addGoal() {
    const goal = newGoal.trim()

    if (goal.length < 5) {
      alert('Please enter a valid goal.')
      return
    }

    setGoals([...goals, goal])
    setNewGoal('')
  }

  function removeGoal(index: number) {
    setGoals(goals.filter((_, i) => i !== index))
  }

  return (
    <section>
      <h2>My Fitness Goals</h2>
      <p>Create your own workout goals.</p>

      <input
        type="text"
        placeholder="Complete 5 workouts this week"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
      />

      <button onClick={addGoal}>Add Goal</button>

      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            {goal}
            <button onClick={() => removeGoal(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GoalsPage