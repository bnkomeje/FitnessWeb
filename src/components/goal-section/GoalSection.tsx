function GoalSection() {
  const goals = [
    "Exercise regularly",
    "Improve endurance",
    "Stay active",
    "Build strength"
  ]

  return (
    <section id="goals" className="goal-section">
      <h2>Fitness Goals</h2>
      <p>Set goals to help improve your fitness.</p>

      <ul>
        {goals.map((goal) => (
          <li key={goal}>{goal}</li>
        ))}
      </ul>
    </section>
  )
}

export default GoalSection