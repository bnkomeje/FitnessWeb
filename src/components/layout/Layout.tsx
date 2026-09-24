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
            <NavLink to="/workouts">Workouts</NavLink>
            <NavLink to="#fitness-tips">Fitness tips</NavLink>
            <NavLink to="#Login">Login</NavLink>
            <NavLink to="#Help">Help</NavLink>
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
        </p>
      </footer>
    </>
  )
}

export default Layout