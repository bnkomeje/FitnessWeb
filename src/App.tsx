import './App.css'
import WorkoutSection from './components/workout-section/WorkoutSection'
import GoalSection from './components/goal-section/GoalSection'
import FitnessTips from './components/fitness-tips/FitnessTips'

function App() {
  return (
    <>
      <header className="site-header">
        <div className="navbar">
          <h1 className="logo">
            FITNESS<span>WEB</span>
          </h1>

          <nav>
            <a href="#home">Home</a>
            <a href="#workouts">Workouts</a>
            <a href="#goals">Goals</a>
            <a href="#fitness-tips">Tips</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-label">START YOUR FITNESS JOURNEY</p>

            <h2>
              BUILD A STRONGER
              <span> VERSION OF YOU</span>
            </h2>

            <p className="hero-description">
              Discover workouts, create fitness goals and learn simple tips
              that can help you stay active and consistent.
            </p>

            <div className="hero-buttons">
              <a className="primary-button" href="#workouts">
                Explore Workouts
              </a>

              <a className="secondary-button" href="#goals">
                View Goals
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-icon">🏋️</div>
            <h3>YOUR FITNESS</h3>
            <p>Starts with one workout.</p>

            <div className="hero-stats">
              <div>
                <strong>4+</strong>
                <span>Workouts</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Goals</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Tips</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-heading">
          <p>EXPLORE</p>
          <h2>Everything You Need</h2>
          <span>
            Simple fitness information designed to help you build better
            habits.
          </span>
        </section>

        <div className="fitness-sections">
          <WorkoutSection />
          <GoalSection />
          <FitnessTips />
        </div>
      </main>

      <footer>
        <div>
          <h2>
            FITNESS<span>WEB</span>
          </h2>
          <p>Build strength. Stay active. Stay consistent.</p>
        </div>

        <p>Team Members: Bosco Nkomeje and Taranpreet Singh</p>
      </footer>
    </>
  )
}

export default App