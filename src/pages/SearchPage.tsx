import { useState } from 'react'
import type { Workout } from '../types/Workout'

type SearchPageProps = {
  workouts: Workout[]
}

function SearchPage({ workouts }: SearchPageProps) {
  const [search, setSearch] = useState('')

  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="search-page">
      <h1>Search Workouts</h1>

      <input
        type="text"
        placeholder="Search for a workout..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button
        type="button"
        onClick={() => setSearch('')}
      >
        Clear
      </button>

      <p>
        Workouts found: {filteredWorkouts.length}
      </p>

      {filteredWorkouts.length > 0 ? (
        filteredWorkouts.map((workout) => (
          <p key={workout.id}>
            🏋️ {workout.name}
          </p>
        ))
      ) : (
        <p>No workouts found.</p>
      )}
    </main>
  )
}

export default SearchPage