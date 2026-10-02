import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="navbar">
          <h1 className="logo">
            FITNESS<span>WEB</span>
          </h1>

          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Search</NavLink>
            <NavLink to="/workouts">Workouts</NavLink>
            <NavLink to="/">Fitness tips</NavLink>
            <NavLink to="/">Login</NavLink>
            <NavLink to="/help">Help</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h2>
          FITNESS<span>WEB</span>
        </h2>

        <p>
          Build strength. Stay active. Stay consistent.

          Team Members: Bosco Nkomeje and Taranpreet Singh
        </p>
      </footer>
    </>
  )
}

export default Layout