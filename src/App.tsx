import './App.css'
import WorkoutSection from './components/workout-section/WorkoutSection'
import GoalSection from './components/goal-section/GoalSection'
import FitnessTips from './components/fitness-tips/FitnessTips'

function App() {
  return (
    <>
      <header>
        <h1>FitnessWeb</h1>

        <nav>
          <a href="#workouts">Workouts</a>
          <a href="#goals">Goals</a>
        </nav>
      </header>

      <main>
        <WorkoutSection />
        <GoalSection />
        <FitnessTips />
      </main>

      <footer>
        <p>Team Members: Bosco Nkomeje and Taranpreet Singh</p>
      </footer>
    </>
  )
}

export default App