function WorkoutSection() {
  const workouts = [
    "Running",
    "Push-ups",
    "Squats",
    "Walking"
  ]

  return (
    <section id="workouts" className="workout-section">
      <h2>Workouts</h2>
      <p>Choose from our available workouts.</p>

      <ul>
        {workouts.map((workout) => (
          <li key={workout}>{workout}</li>
        ))}
      </ul>
    </section>
  )
}

export default WorkoutSection