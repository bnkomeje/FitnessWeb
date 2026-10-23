
import { useMemo } from 'react'
import { useSearch } from '../hooks/useSearch'
import { useWorkouts } from '../hooks/useWorkouts'
import * as WorkoutService from '../services/workoutService'

/**
 * SearchPage uses useSearch for input and debounce.
 * useWorkouts supplies the shared workout data.
 * workoutService handles the search business logic.
 */
function SearchPage() {
  const {
    searchValue,
    setSearchValue,
    searchTerm,
    error: searchError,
    clearSearch
  } = useSearch()

  const {
    workouts,
    error: workoutError
  } = useWorkouts()

  const filteredWorkouts = useMemo(() => {
    return WorkoutService.searchWorkouts(searchTerm)
  }, [searchTerm, workouts])

  return (
    <main className="search-page">
      <h1>Search Workouts</h1>

      <input
        type="text"
        placeholder="Search for a workout..."
        value={searchValue}
        onChange={event =>
          setSearchValue(event.target.value)
        }
      />

      <button
        type="button"
        onClick={clearSearch}
      >
        Clear
      </button>

      {searchError && (
        <p role="alert">{searchError}</p>
      )}

      {workoutError && (
        <p role="alert">{workoutError}</p>
      )}

      <p>Workouts found: {filteredWorkouts.length}</p>

      {filteredWorkouts.length > 0 ? (
        filteredWorkouts.map(workout => (
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
