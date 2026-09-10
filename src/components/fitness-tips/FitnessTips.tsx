function FitnessTips() {
  const tips = [
    "Stay hydrated throughout the day",
    "Warm up before exercising",
    "Get enough sleep and rest",
    "Stay consistent with your workouts"
  ]

  return (
    <section id="fitness-tips" className="fitness-tips">
      <h2>Fitness Tips</h2>
      <p>Simple tips to help improve your fitness routine.</p>

      <ul>
        {tips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </section>
  )
}

export default FitnessTips