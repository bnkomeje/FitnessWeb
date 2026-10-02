function HelpPage() {
  return (
    <main className="help-page">

      <h1>Help</h1>

      <div className="help-content">

        <h2>🏋️ How the Fitness App Works</h2>

        <p>
          This Fitness App helps you manage and track your workouts.
          You can view your available workouts on the Workouts page.
        </p>

        <p>
          You can add a new workout by entering the workout name and
          an exercise video URL. The new workout will be added to your
          workout list.
        </p>

        <p>
          When you finish a workout, click the ✅ Complete button.
          The app will increase the number of completed workouts.
        </p>

        <p>
          If you no longer need a workout, click the 🗑️ Remove button
          to remove it from the list.
        </p>

        <p>
          Exercise videos are displayed on the Workouts page so you
          can watch them directly on the website.
        </p>

      </div>

    </main>
  )
}

export default HelpPage